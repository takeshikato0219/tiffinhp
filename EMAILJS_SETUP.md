# EmailJS設定ガイド

## 1. EmailJSアカウントの作成と設定

### ステップ1: EmailJSアカウントを作成
1. [EmailJS](https://www.emailjs.com/)にアクセス
2. 無料アカウントを作成（月200通まで無料）

### ステップ2: Emailサービスを追加
1. [EmailJSダッシュボード](https://dashboard.emailjs.com/admin/integration)にログイン
2. 「Email Services」→「Add New Service」をクリック
3. 使用するメールサービスを選択（Gmail、Outlook、SendGridなど）
4. サービスを接続し、**Service ID**をメモ

### ステップ3: Emailテンプレートを作成
1. [EmailJSテンプレート](https://dashboard.emailjs.com/admin/template)にアクセス
2. 「Create New Template」をクリック
3. 以下の設定でテンプレートを作成：

#### テンプレート設定例：

**Subject（件名）:**
```
【TIFFIN株式会社】お問い合わせフォームより - {{from_name}}様
```

**Content（本文）:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【TIFFIN株式会社】お問い合わせフォーム
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

お名前: {{from_name}}
会社名: {{from_company}}
メールアドレス: {{from_email}}
電話番号: {{from_phone}}
ご希望のサービス: {{service}}

【お問い合わせ内容】
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
送信日時: {{date}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**To Email（受信先）:**
```
your-email@example.com
```

**From Name（送信者名）:**
```
TIFFIN株式会社 お問い合わせフォーム
```

**Reply To（返信先）:**
```
{{from_email}}
```

4. 「Save」をクリックし、**Template ID**をメモ

### ステップ4: Public Keyを取得
1. [EmailJS Account](https://dashboard.emailjs.com/admin/account)にアクセス
2. 「Public Key」をコピー

## 2. 環境変数の設定

### ローカル開発環境
1. `.env.example`を`.env.local`にコピー
2. 取得した値を設定：

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### AWS（Amplify/ECS/Lambda）での設定

#### AWS Amplifyの場合：
1. AWS Amplifyコンソールにログイン
2. アプリを選択
3. 「App settings」→「Environment variables」を選択
4. 以下の環境変数を追加：
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

#### AWS ECS/Fargateの場合：
1. ECSタスク定義で環境変数を設定
2. または、AWS Systems Manager Parameter Storeを使用

#### AWS Lambda（Serverless）の場合：
1. Lambda関数の環境変数に設定
2. または、AWS Secrets Managerを使用

## 3. テンプレート変数のマッピング

現在のフォームでは以下の変数が使用されています：

| フォームフィールド | EmailJS変数名 | 説明 |
|------------------|--------------|------|
| お名前 | `from_name` | 必須 |
| 会社名 | `from_company` | オプション（未入力時は「未入力」） |
| メールアドレス | `from_email` | 必須 |
| 電話番号 | `from_phone` | オプション（未入力時は「未入力」） |
| ご希望のサービス | `service` | 必須 |
| お問い合わせ内容 | `message` | 必須 |
| 受信先名 | `to_name` | 固定値「TIFFIN株式会社」 |

## 4. 動作確認

1. ローカル環境で開発サーバーを起動：
```bash
npm run dev
```

2. 問い合わせフォームからテスト送信
3. 指定したメールアドレスにメールが届くことを確認

## 5. セキュリティ設定

### EmailJSのセキュリティ設定：
1. [EmailJS Security](https://dashboard.emailjs.com/admin/security)にアクセス
2. 「Allowed Origins」にドメインを追加：
   - 本番環境: `https://ai-shift.com`
   - 開発環境: `http://localhost:5555`

### レート制限の設定：
1. EmailJSダッシュボードでレート制限を設定
2. スパム対策のため、1時間あたりの送信数を制限

## 6. トラブルシューティング

### メールが届かない場合：
1. EmailJSダッシュボードの「Logs」でエラーを確認
2. 環境変数が正しく設定されているか確認
3. ブラウザのコンソールでエラーを確認

### CORSエラーの場合：
1. EmailJSの「Allowed Origins」にドメインが追加されているか確認
2. 環境変数の`NEXT_PUBLIC_`プレフィックスが正しいか確認

## 参考リンク
- [EmailJS公式ドキュメント](https://www.emailjs.com/docs/)
- [EmailJS React統合ガイド](https://www.emailjs.com/docs/examples/reactjs/)
