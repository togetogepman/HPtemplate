# 研究室HPテンプレート

## 1. このテンプレートについて

株式会社アカデメイアが、研究者個人または研究室向けに提供する「研究室HPテンプレート」です。HTML、CSS、JavaScriptをGitHubへ置き、GitHub Pagesで公開できます。CMS、ノーコードサービス、AIホームページ生成サービスではありません。

ChatGPTで原稿や依頼内容を整理し、Codexにファイル変更、検証、commit、pushを依頼する使い方を想定しています。AIが作った内容は必ず人が確認してください。

## 2. 完成サンプル

- [完成サンプルを開く](./sample.html)
- [利用開始用ページを開く](./index.html)

`sample.html`は、すべてのセクション、長文、空データ、「もっと見る」の件数境界を確認する完成見本です。`index.html`は自分の研究室情報を入力する正本です。

GitHub Pagesのプロジェクトサイトでは、完成サンプルの想定URLは次の形です。

```text
https://ユーザー名.github.io/リポジトリ名/sample.html
```

## 3. 対象者

- GitHubアカウントを作成できる方
- GitHubの基本操作を学ぶ意思がある方
- HTMLを手作業では編集できないが、ChatGPTとCodexを利用したい研究者・研究室
- AIの出力と公開情報を自分で確認できる方

完全なPC初心者への個別導入支援や、無料の操作サポートは想定していません。

## 4. できること

- 研究室名、所属、プロフィール、経歴等の変更
- NEWS、研究テーマ、メンバー、OB・OG、論文、発表、書籍等の追加・削除
- 画像、ロゴ、OGP、faviconの差し替え
- セクションの表示・非表示と並べ替え
- 色、フォント、余白、角丸、罫線等のデザイン調整
- 既存構造内の軽微なレイアウト変更
- GitHub Pagesでの静的サイト公開

## 5. 想定範囲外のこと

CMS、データベース、認証、外部API連携、論文情報の自動同期、問い合わせフォーム送信、管理画面、大規模な複数ページサイト、高度なアニメーション、EC、決済等は想定範囲外です。

利用者が自力で追加することは禁止しませんが、このテンプレートの検証・サポート対象ではありません。

## 6. ChatGPTとCodexの役割

ChatGPTは、研究室資料の整理、公開用原稿、Codexへ渡す依頼文の作成に使います。Codexは、リポジトリ内のファイル変更、ブラウザ確認、テスト、Gitのcommitとpushに使います。

GitHubはファイルと変更履歴を保管・共有するサービスです。branchは公開用の内容と作業中の内容を分ける作業線、commitは変更をひとまとまりで記録する操作、pushはその記録をGitHub上のremote（保存先）へ送る操作です。

Codexはリポジトリを開くと、ルートの[AGENTS.md](./AGENTS.md)から継続的な作業規則を読みます。`prompts/`のMarkdownは、目的別にCodexへ渡す依頼テンプレートです。初回カスタマイズだけはExcelを入力の正本とし、日常更新では各Markdownの入力欄を使います。これらはCodexのスラッシュコマンドではありません。

研究実績、所属、肩書、論文、受賞等をAIに推測させないでください。未公開情報、個人情報、APIキー、認証情報を安易に入力しないでください。

## 7. 最短の開始手順

1. GitHub上で自分用のリポジトリを用意します。
2. GitHub Desktop等でPCへcloneします。
3. [研究室HP入力用Excel](./input/laboratory-input.xlsx)を開き、黄色い入力欄を書き換えます。
4. `00_チェック`が「入力完了」になったことを確認し、Excelを保存します。
5. Codexでリポジトリを開き、[初期カスタマイズ用プロンプト](./prompts/INITIAL_CUSTOMIZATION.md)を渡します。
6. CodexがExcelを読み、`index.html`へ反映・検証・commit・pushした結果を人が確認します。
7. [公開前確認用プロンプト](./prompts/PRE_PUBLISH_REVIEW.md)で検査します。
8. 問題がなければGitHub Pagesを設定します。

詳しい手順は[はじめ方](./docs/GETTING_STARTED.md)を参照してください。

## 8. ファイル構成

| ファイル | 役割 |
|---|---|
| `index.html` | 利用者が自分の研究室サイトとして編集する正本 |
| `sample.html` | 完成見本、件数境界、回帰試験用 |
| `input/laboratory-input.xlsx` | 初回カスタマイズで利用者が研究室情報を入力する正本 |
| `AGENTS.md` | Codexが守るリポジトリ固有ルール |
| `DESIGN.md` | 現行デザイン仕様と変更希望の記入欄 |
| `assets/css/theme.css` | 色、フォント、主要余白等の変更頻度が高い値 |
| `assets/css/style.css` | レイアウトとコンポーネント実装 |
| `assets/js/script.js` | ナビ、Swiper、「もっと見る」、コピー等の機能 |
| `prompts/` | 目的別のCodex依頼テンプレート |
| `docs/` | 詳細な利用・公開・安全文書 |

## 9. 初期カスタマイズ

[研究室HP入力用Excel](./input/laboratory-input.xlsx)をそのまま開き、黄色い入力欄を研究室情報へ書き換えて保存します。次に[INITIAL_CUSTOMIZATION.md](./prompts/INITIAL_CUSTOMIZATION.md)をCodexへ渡すと、CodexがExcelを読み、公開用の`index.html`へ反映します。同じ情報をMarkdownへ転記する必要はありません。

このExcelはGit管理対象で、commit・pushするとGitHubへ保存される可能性があります。公開されても問題ない情報だけを入力してください。

入力資料にない事実は空欄またはプレースホルダーのままにします。実在しそうな情報をAIに補完させないでください。

## 10. デザイン変更

[DESIGN.md](./DESIGN.md)の「21. デザイン変更指示」だけを編集し、[APPLY_DESIGN.md](./prompts/APPLY_DESIGN.md)をCodexへ渡します。

`DESIGN.md`を書き換えただけでは表示は変わりません。Codexが変更指示を読み、まず`theme.css`で対応し、必要な場合だけ`style.css`やHTMLを変更します。

## 11. 日常更新

- NEWS追加: [ADD_NEWS.md](./prompts/ADD_NEWS.md)
- メンバー更新: [UPDATE_MEMBERS.md](./prompts/UPDATE_MEMBERS.md)
- 論文・発表追加: [ADD_PUBLICATION.md](./prompts/ADD_PUBLICATION.md)
- セクション変更: [REORDER_OR_REMOVE_SECTION.md](./prompts/REORDER_OR_REMOVE_SECTION.md)

一度の依頼を小さくし、1つのcommitで内容を確認しやすくすることを推奨します。

## 12. 公開前確認

[PRE_PUBLISH_REVIEW.md](./prompts/PRE_PUBLISH_REVIEW.md)を使い、サンプル文言、プレースホルダー、論文・受賞・所属の正確性、個人情報、404、PC/SP表示、Contactコピー、帰属表示等を確認します。

事実関係、掲載許可、画像の権利は自動検査だけでは判断できません。研究代表者または公開責任者が確認してください。

## 13. GitHub Pagesでの公開

基本設定は次のとおりです。

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: /(root)
```

このテンプレートはビルド工程が不要なので、branchのルートから公開できます。作業branch上の変更は、`main`へ統合するまで通常の公開元には反映されません。

最新の画面や条件は[GitHub公式の公開元設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)を確認してください。詳しくは[GitHub Pages公開手順](./docs/PUBLISH_WITH_GITHUB_PAGES.md)にまとめています。

## 14. 利用条件と帰属表示

無料利用時は、フッターの株式会社アカデメイアの帰属表示と、次のサービスリンクを維持してください。

```text
https://www.academeia15.co.jp/web-template
```

帰属表示の削除には、別途有償の削除許諾が必要です。非表示、判読不能化、別URLへの変更も行わないでください。詳しくは[LICENSE.md](./LICENSE.md)を確認してください。

## 15. 無保証・無償サポートなし

このテンプレートは現状有姿で提供され、動作、正確性、継続提供、特定用途への適合を保証しません。利用、改変、公開、掲載内容の確認は利用者自身の責任です。

無償の個別導入、設定、カスタマイズ、トラブル対応は提供しません。不具合報告や改善提案を受け付ける場合でも、返信、調査、修正、採用を保証しません。詳しくは[SUPPORT.md](./SUPPORT.md)を確認してください。

## 16. 有償サービス

個別の導入、設定、カスタマイズ、更新支援、帰属表示削除許諾については、[アカデメイアの研究室HPテンプレート解説ページ](https://www.academeia15.co.jp/web-template)から相談できます。提供内容、料金、契約成立は個別に確認してください。

## 17. 詳細文書

- [はじめ方](./docs/GETTING_STARTED.md)
- [Codexでのカスタマイズ](./docs/CUSTOMIZE_WITH_CODEX.md)
- [GitHub Pages公開手順](./docs/PUBLISH_WITH_GITHUB_PAGES.md)
- [HTMLを手作業で編集する方法](./docs/MANUAL_EDITING.md)
- [プライバシーと安全性](./docs/PRIVACY_AND_SAFETY.md)
- [デザイン仕様](./DESIGN.md)
- [利用条件](./LICENSE.md)
- [サポート方針](./SUPPORT.md)
- [第三者ライセンス](./THIRD_PARTY_NOTICES.md)
