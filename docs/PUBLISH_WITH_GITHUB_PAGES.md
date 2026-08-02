# GitHub Pagesで公開する

## 前提

- このテンプレートはHTML、CSS、JavaScriptを直接公開する静的サイトです。
- npm buildやGitHub Actionsの独自workflowは不要です。
- GitHub Freeで利用する場合はPublicリポジトリを基本とします。プランによってはPrivateリポジトリからもPagesを利用できますが、公開サイト自体はインターネットから閲覧可能になります。
- `index.html`が公開元フォルダの最上位に必要です。

## 公開設定

1. GitHubで対象リポジトリを開きます。
2. `Settings`を開きます。
3. 左側の`Pages`を開きます。
4. `Build and deployment`の`Source`で`Deploy from a branch`を選びます。
5. branchで`main`を選びます。
6. folderで`/(root)`を選びます。
7. `Save`を押します。

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: /(root)
```

公式手順: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 現在の作業branchについて

開発中の`AI-support-ver`は確認用branchです。このbranchの変更は、`main`へ統合するまで、上記の`main`公開設定には反映されません。Phase 2では`main`へのmergeを行いません。

## URLの形式

### ユーザー・組織サイト

リポジトリ名が`ユーザー名.github.io`の場合:

```text
https://ユーザー名.github.io/
https://ユーザー名.github.io/sample.html
```

1アカウントにつき通常1つのユーザー／組織サイトです。

### プロジェクトサイト

任意のリポジトリ名の場合:

```text
https://ユーザー名.github.io/リポジトリ名/
https://ユーザー名.github.io/リポジトリ名/sample.html
```

URLの公式説明: [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 公開後の確認

- 公開反映には数分以上かかる場合があります。
- リポジトリの`Actions`でPages deploymentの成否を確認します。
- 404の場合は、branch、`/(root)`、小文字の`index.html`、ファイル位置を確認します。
- CSSや画像が表示されない場合は、相対パスと404を確認します。
- `index.html`と`sample.html`の両方をPC/SPで開きます。
- 帰属表示と正式リンクを確認します。

公式の404確認: [Troubleshooting 404 errors for GitHub Pages sites](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

## Publicリポジトリの注意

Publicリポジトリでは、HTMLに表示していないファイルやGit履歴も閲覧されます。削除した秘密情報が過去commitに残る場合があります。公開前に`docs/PRIVACY_AND_SAFETY.md`を確認してください。

## 独自ドメイン

独自ドメインはサービス、DNS、大学側規則等の確認が必要なため、この文書の詳細対象外です。設定する場合はGitHub公式文書とドメイン管理者の指示を確認してください。
