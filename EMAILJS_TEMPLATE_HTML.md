# EmailJSテンプレート HTML版

## TIFFIN株式会社 問い合わせフォーム用テンプレート

以下のHTMLをEmailJSテンプレートの「Content」フィールドに貼り付けてください。

### Subject（件名）:
```
【TIFFIN株式会社】お問い合わせフォームより - {{from_name}}様
```

### Content（本文）:
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  
  <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #1b4451;">
    <h1 style="color: #1b4451; font-size: 24px; margin: 0 0 10px 0; font-weight: bold;">
      TIFFIN株式会社
    </h1>
    <p style="color: #666; font-size: 14px; margin: 0;">
      お問い合わせフォームよりメッセージを受信しました
    </p>
  </div>

  <div style="margin-bottom: 20px; padding: 15px; background-color: #f9fafa; border-radius: 8px; border-left: 4px solid #1b4451;">
    <div style="color: #1b4451; font-size: 16px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center;">
      <span style="display: inline-block; width: 4px; height: 16px; background-color: #1b4451; margin-right: 8px;"></span>
      お客様情報
    </div>
    
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #666; font-size: 13px; width: 120px; vertical-align: top;">
          お名前
        </td>
        <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold;">
          {{from_name}}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">
          会社名
        </td>
        <td style="padding: 8px 0; color: #333; font-size: 14px;">
          {{from_company}}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">
          メールアドレス
        </td>
        <td style="padding: 8px 0; color: #333; font-size: 14px;">
          <a href="mailto:{{from_email}}" style="color: #1b4451; text-decoration: none;">{{from_email}}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">
          電話番号
        </td>
        <td style="padding: 8px 0; color: #333; font-size: 14px;">
          {{from_phone}}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">
          ご希望のサービス
        </td>
        <td style="padding: 8px 0; color: #333; font-size: 14px; font-weight: bold; color: #1b4451;">
          {{service}}
        </td>
      </tr>
    </table>
  </div>

  <div
    style="
      margin-top: 30px;
      padding: 20px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: #e0e0e0;
    "
  >
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="vertical-align: top; width: 60px;">
          <div
            style="
              padding: 0;
              margin: 0 auto;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            role="img"
          >
            <div style="
              width: 40px;
              height: 40px;
              background-color: #1b4451;
              border-radius: 50%;
              position: relative;
            ">
              <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 20px;
                height: 16px;
                background-color: white;
                border-radius: 3px;
              "></div>
              <div style="
                position: absolute;
                bottom: 6px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #1b4451;
              "></div>
            </div>
          </div>
        </td>
        <td style="vertical-align: top; padding-left: 15px;">
          <div style="color: #1b4451; font-size: 16px; font-weight: bold; margin-bottom: 8px;">
            お問い合わせ内容
          </div>
          <div style="color: #999; font-size: 12px; margin-bottom: 15px;">
            {{date}}
          </div>
          <div style="color: #333; font-size: 15px; line-height: 1.8; white-space: pre-wrap; background-color: #f9fafa; padding: 15px; border-radius: 5px; border-left: 3px solid #1b4451;">
            {{message}}
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
    <p style="color: #999; font-size: 12px; margin: 0;">
      このメールは、TIFFIN株式会社のお問い合わせフォームから自動送信されました。<br>
      返信する場合は、上記のメールアドレス（{{from_email}}）にご返信ください。
    </p>
  </div>

  <div style="margin-top: 20px; padding: 15px; background-color: #f3d2c1; border-radius: 5px; text-align: center;">
    <p style="color: #333; font-size: 12px; margin: 0;">
      <strong>TIFFIN株式会社</strong><br>
      〒955-0084 新潟県三条市石上１丁目10番33号<br>
      TEL: 070-9133-6957
    </p>
  </div>

</div>
```

### テンプレート設定:

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

## 使用される変数

| 変数名 | 説明 | 必須 |
|--------|------|------|
| `{{from_name}}` | お名前 | ✓ |
| `{{from_company}}` | 会社名 | - |
| `{{from_email}}` | メールアドレス | ✓ |
| `{{from_phone}}` | 電話番号 | - |
| `{{service}}` | ご希望のサービス | ✓ |
| `{{message}}` | お問い合わせ内容 | ✓ |
| `{{date}}` | 送信日時（自動） | - |

## カスタマイズポイント

### 色の変更
- メインカラー（`#1b4451`）: TIFFINのブランドカラー（teal-dark）
- アクセントカラー（`#f3d2c1`）: TIFFINのブランドカラー（yellow）

### レイアウトの調整
- `max-width: 600px`: メールの最大幅
- `padding: 20px`: 全体の余白
- 各セクションの`padding`や`margin`を調整可能

### フォントサイズの調整
- 見出し: `font-size: 24px`
- 本文: `font-size: 14px`
- 小さいテキスト: `font-size: 12px`

## プレビュー確認

EmailJSダッシュボードの「Test」機能で、以下のテストデータを使用してプレビューできます：

```
from_name: テスト太郎
from_company: テスト株式会社
from_email: test@example.com
from_phone: 090-1234-5678
service: AI開発・AIウェブ開発
message: これはテストメッセージです。お問い合わせ内容をここに記入します。
```

