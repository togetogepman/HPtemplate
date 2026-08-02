# HTMLを手作業で編集する

この文書は、Codexを使わずHTMLを直接編集する方向けです。通常は目的別プロンプトをCodexへ渡す方法を推奨します。

編集前にGitでcommitして変更前の状態を残してください。`sample.html`は見本として維持し、実際の情報は`index.html`へ入力します。入力資料にない人物、業績、所属、受賞、URL等は作成しないでください。

## ヘッダーと研究室名

`index.html`の`.site-brand__ja`と`.site-brand__en`を変更します。ヒーロー内の研究室名とページの`title`、description、OGP情報も同じ内容へ合わせます。

```html
<span class="site-brand__ja">研究室名を入力してください</span>
<span class="site-brand__en" lang="en">Laboratory Name</span>
```

## ナビゲーション

ナビ項目は`#site-nav`内へ明示的に記載しています。セクションを追加、移動、削除する場合は、対応するリンクも同時に確認します。

```html
<li><a href="#news">NEWS</a></li>
```

リンクの`href="#news"`と、移動先の`<section id="news">`を一致させます。`id`はページ内で重複させません。`href="#"`や空の`href`を仮リンクとして残さないでください。

## 画像

画像を`assets/images/`へ置き、`src`と`alt`を変更します。ファイル名の大文字・小文字はGitHub Pagesで区別されます。

```html
<img src="./assets/images/sample-mv.png" alt="画像内容を具体的に説明" />
```

人物、学生、大学ロゴ、共同研究先ロゴ等は掲載許可を確認してください。装飾画像は空alt、情報を伝える画像は用途が分かるaltにします。

## NEWS

`.news-list`直下の`li`を複製し、新しい順に配置します。すべての項目を初期表示するため、件数に応じたJavaScript変更は不要です。

```html
<li>
  <div class="resource-list__meta">
    <time datetime="2026-08-02">2026年8月2日</time>
    <span class="label">お知らせ</span>
  </div>
  <p class="resource-list__title">お知らせのタイトル</p>
</li>
```

リンクがある場合は、タイトル自体を`a`で囲みます。外部リンクを新しいタブで開く場合は`target="_blank"`、`rel="noopener noreferrer"`、外部リンク表示と「新しいタブで開きます」という代替文言を付けます。

## 研究テーマ

`.card-grid`直下の`.research-card`を複製します。画像、研究領域、テーマ名、短い説明、目的が分かる導線を編集します。カード全体をリンクにせず、リンクだけを操作対象にします。

## モットー

`.statement-list`直下の`.statement`を追加・削除し、番号、見出し、本文を編集します。番号が内容上重要な場合は`aria-hidden="true"`を外し、読み上げ可能な実テキストにします。

## メンバーとOB／OG

`.member-groups`直下の`.member-group`が所属・課程グループです。グループには固有の見出し`id`を設定し、`aria-labelledby`と一致させます。

在籍メンバーは通常のリストで表示します。件数が多いOB／OGだけ`details`に掲載できます。氏名、学年、職位、進路、所属先は原資料と照合し、掲載許可を確認してください。

## プロフィール

基本情報は`.description-list`の`div`単位で編集します。項目名は`dt`、内容は`dd`です。経歴と受賞歴は`.timeline`、所属学会は`.plain-list`へ追加します。

画像を使う場合は`.profile-photo`を`img`へ置き換えます。縦横比3:4を推奨します。項目がない場合は架空情報で埋めず、プレースホルダーのままにするか、項目全体を削除します。

## 論文・研究発表

`.publication-groups`内の「論文誌」「学会発表」「外部記事」「書籍」「その他」の該当sectionへ追加します。業績は`.publication-list`の`li`へ年と本文を記載します。

```html
<li>
  <time>2026年</time>
  <p>原資料と照合した書誌情報</p>
</li>
```

0件の場合は`.empty-state`で入力案内を表示します。著者順、題名、誌名、巻号、年、DOI、URLを原資料と照合し、推測で補完しないでください。

## Contact

表示用メールアドレスは`#contact-email`のテキストを変更します。コピーボタンの`data-copy-target="contact-email"`と一致させます。

```html
<span class="contact-email" id="contact-email">contact@example.ac.jp</span>
```

公開前にダミー値を正式な問い合わせ先へ変更し、通常コピーと失敗時の案内を確認します。個人メールを使うか研究室共有アドレスを使うかは、組織規則に従ってください。

所在地とアクセスを分けて編集します。地図リンクは正式な所在地を確認できた場合だけ追加し、APIキーをHTMLへ書かないでください。

## meta、OGP、favicon

`title`、description、OG/Twitter用title・description・image・altを更新します。OGP画像、favicon、Apple Touch Iconのローカル参照が404にならないことを確認してください。

## デザイン

色、フォント、主要余白、角丸等は`assets/css/theme.css`を編集します。コンポーネント固有のレイアウトは`assets/css/style.css`です。`DESIGN.md`の現行仕様と維持要件を先に確認してください。

## 帰属表示

無料利用時は、`index.html`と`sample.html`のアカデメイア帰属表示、ロゴ、正式サービスリンクを削除、非表示、別URL化しないでください。
