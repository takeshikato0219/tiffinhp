# EmailJS設定情報

## 取得した設定値

以下の設定値を取得しました。環境変数ファイルに設定してください。

### Template ID
```
template_w9gma4c
```

### Service ID
```
service_47wjggu
```

### Public Key
```
62fy23UHQA1peUUj7
```

## 環境変数の設定

プロジェクトルートに`.env.local`ファイルを作成し、以下の内容を記入してください：

```env
# EmailJS設定
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=62fy23UHQA1peUUj7
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_47wjggu
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_w9gma4c
```

## 設定手順

1. プロジェクトルート（`/Users/takeshi/Desktop/ai-shift-clone/`）に`.env.local`ファイルを作成
2. 上記の環境変数をコピー&ペースト
3. 開発サーバーを再起動：
   ```bash
   npm run dev
   ```

## EmailJSテンプレート設定

### テンプレート名
```
TIFFIN Contact Us
```

### テンプレートID
```
template_w9gma4c
```

### テンプレート設定確認事項

以下の設定が正しいか確認してください：

- **To Email**: `takeshi@tiffin.one`
- **From Name**: `{{from_name}}` または `TIFFIN株式会社 お問い合わせフォーム`
- **From Email**: "Use Default Email Address"にチェック
- **Reply To**: `{{from_email}}`
- **Content**: `emailjs-template.html`の内容をコピー&ペースト

## 動作確認

1. 開発サーバーを起動：
   ```bash
   npm run dev
   ```

2. ブラウザで http://localhost:5555 にアクセス

3. 問い合わせフォームからテスト送信

4. `takeshi@tiffin.one`にメールが届くことを確認

## AWSデプロイ時の設定

AWS Amplify、ECS、Lambdaなどにデプロイする場合は、環境変数を以下のように設定してください：

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=62fy23UHQA1peUUj7`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_47wjggu`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_w9gma4c`

## セキュリティ注意事項

⚠️ **重要**: `.env.local`ファイルは`.gitignore`に含まれているため、Gitにコミットされません。これは正しい設定です。

本番環境では、環境変数をAWSの設定画面やCI/CDパイプラインで設定してください。**Public Keyは公開されても問題ありませんが、Private Keyは絶対に公開しないでください。**

