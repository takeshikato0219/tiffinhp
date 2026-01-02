# AWSデプロイガイド（GitHub連携）

## 1. AWS Amplifyを使用する場合（推奨）

### ステップ1: GitHubリポジトリの準備
1. GitHubにリポジトリを作成
2. コードをプッシュ

### ステップ2: AWS Amplifyでアプリを作成
1. [AWS Amplify Console](https://console.aws.amazon.com/amplify/)にアクセス
2. 「New app」→「Host web app」を選択
3. GitHubを選択してリポジトリを接続
4. ブランチを選択（通常は`main`または`master`）

### ステップ3: ビルド設定
Amplifyは自動的にNext.jsを検出しますが、必要に応じて`amplify.yml`を作成：

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### ステップ4: 環境変数の設定
1. Amplifyコンソールでアプリを選択
2. 「App settings」→「Environment variables」を選択
3. 以下の環境変数を追加：

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

4. 「Save」をクリック
5. 「Redeploy this version」をクリックして再デプロイ

## 2. AWS ECS/Fargateを使用する場合

### Dockerfileの作成
プロジェクトルートに`Dockerfile`を作成：

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 環境変数をビルド時に設定
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### next.config.jsの設定
`next.config.js`に`output: 'standalone'`を追加：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // 既存の設定...
}

module.exports = nextConfig
```

### ECSタスク定義での環境変数設定
ECSタスク定義で環境変数を設定：

```json
{
  "containerDefinitions": [
    {
      "environment": [
        {
          "name": "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
          "value": "your_public_key"
        },
        {
          "name": "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
          "value": "your_service_id"
        },
        {
          "name": "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
          "value": "your_template_id"
        }
      ]
    }
  ]
}
```

## 3. GitHub Actionsを使用する場合

`.github/workflows/deploy.yml`を作成：

```yaml
name: Deploy to AWS

on:
  push:
    branches:
      - main

env:
  AWS_REGION: ap-northeast-1
  ECR_REPOSITORY: your-ecr-repo
  ECS_SERVICE: your-ecs-service
  ECS_CLUSTER: your-ecs-cluster
  ECS_TASK_DEFINITION: your-task-definition

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1

    - name: Build, tag, and push image to Amazon ECR
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        docker build \
          --build-arg NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=${{ secrets.EMAILJS_PUBLIC_KEY }} \
          --build-arg NEXT_PUBLIC_EMAILJS_SERVICE_ID=${{ secrets.EMAILJS_SERVICE_ID }} \
          --build-arg NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${{ secrets.EMAILJS_TEMPLATE_ID }} \
          -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG \
          -t $ECR_REGISTRY/$ECR_REPOSITORY:latest .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest

    - name: Fill in the new image ID in the Amazon ECS task definition
      id: task-def
      uses: aws-actions/amazon-ecs-render-task-definition@v1
      with:
        task-definition: task-definition.json
        container-name: your-container-name
        image: ${{ steps.login-ecr.outputs.registry }}/${{ env.ECR_REPOSITORY }}:${{ github.sha }}

    - name: Deploy Amazon ECS task definition
      uses: aws-actions/amazon-ecs-deploy-task-definition@v1
      with:
        task-definition: ${{ steps.task-def.outputs.task-definition }}
        service: ${{ env.ECS_SERVICE }}
        cluster: ${{ env.ECS_CLUSTER }}
        wait-for-service-stability: true
```

### GitHub Secretsの設定
1. GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」を選択
2. 以下のシークレットを追加：
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`

## 4. 環境変数の確認

デプロイ後、以下のコマンドで環境変数が正しく設定されているか確認：

```bash
# Amplifyの場合
aws amplify get-app --app-id your-app-id

# ECSの場合
aws ecs describe-task-definition --task-definition your-task-definition
```

## 5. 動作確認

1. デプロイされたサイトにアクセス
2. 問い合わせフォームからテスト送信
3. メールが正しく受信されることを確認
4. ブラウザのコンソールでエラーがないか確認

## トラブルシューティング

### 環境変数が読み込まれない場合：
- `NEXT_PUBLIC_`プレフィックスが正しいか確認
- ビルド時に環境変数が設定されているか確認（Next.jsはビルド時に環境変数を埋め込む）

### CORSエラーの場合：
- EmailJSの「Allowed Origins」に本番ドメインが追加されているか確認

### ビルドエラーの場合：
- Node.jsのバージョンが正しいか確認（推奨: Node.js 20）
- 依存関係が正しくインストールされているか確認

