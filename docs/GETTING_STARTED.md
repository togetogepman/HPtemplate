# はじめ方

## 1. GitHubアカウントを用意する

[GitHub](https://github.com/)でアカウントを作成し、メールアドレスの確認と二要素認証を行ってください。公開用リポジトリへ、未公開研究、個人情報、認証情報を置かないでください。

## 2. 自分用リポジトリを作る

配布元がGitHubのTemplate Repository設定を有効にしている場合は、リポジトリ上部の`Use this template`から`Create a new repository`を選択します。テンプレートから作成したリポジトリは、配布元の履歴を引き継がず自分のプロジェクトとして始められます。

`Use this template`が表示されない場合は、配布元のTemplate Repository設定が未完了です。設定変更は配布元管理者の作業であり、利用者やCodexが勝手に変更するものではありません。それまでは、Download ZIPで取得して自分の新規リポジトリへ追加する方法を利用できます。

リポジトリ名は、URLの一部になるため短く分かりやすい名前にします。GitHub FreeでPagesを使う場合は、原則としてPublicリポジトリを想定してください。

## 3. Codexでリポジトリを開く

Codexで自分用リポジトリのフォルダを開きます。Codexは作業開始時にルートの`AGENTS.md`を読み、事実を創作しないこと、帰属表示を維持すること、検証とGit運用等の規則を確認します。

初回は次をCodexへ確認してください。

```text
このリポジトリのAGENTS.mdを読み、現在のディレクトリ、branch、HEAD、working tree、remoteとの差分を確認して報告してください。まだ変更はしないでください。
```

## 4. 初期カスタマイズを依頼する

1. `prompts/INITIAL_CUSTOMIZATION.md`を開きます。
2. 「利用者入力欄」へ、確認済みの研究室資料だけを入力します。
3. 不明な項目は空欄または「不明」とします。
4. ファイル全体をCodexへ貼り付けます。

学生氏名、顔写真、進路、個人メール、共同研究先、未公開研究は、公開許可を確認してから入力してください。

## 5. 結果を確認する

Codexの報告で次を確認します。

- 何が表示されるようになったか
- 変更ファイル
- PC/SPのブラウザ確認
- HTML、CSS、JavaScriptのテスト
- 自動確認できなかった事実・掲載許可
- commit hashとpush先
- working treeとremoteの同期

`index.html`をブラウザで開き、氏名、所属、肩書、論文、受賞、連絡先を原資料と照合してください。`sample.html`は完成見本であり、そこにある内容を実績として転記しないでください。

## 6. 公開前検査を行う

`prompts/PRE_PUBLISH_REVIEW.md`をCodexへ渡します。最初に検査だけを行い、問題がある場合だけ修正するプロンプトです。

自動検査の後、研究代表者または公開責任者が掲載情報、個人情報、画像の権利、第三者ロゴの利用条件を確認してください。

## 7. GitHub Pagesで公開する

変更を`main`へ統合した後、GitHubの`Settings` → `Pages`で次を選択します。

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

詳しくは[PUBLISH_WITH_GITHUB_PAGES.md](./PUBLISH_WITH_GITHUB_PAGES.md)を参照してください。
