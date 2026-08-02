# HTMLを手作業で編集する

この文書は、Codexを使わずHTMLを直接編集する方向けです。通常は目的別プロンプトをCodexへ渡す方法を推奨します。

編集前にファイルをコピーするだけでなく、Gitでcommitして変更前状態を残してください。`sample.html`は見本として維持し、実際の情報は`index.html`へ入力します。

## ヘッダーと研究室名

`index.html`の`.header-name-wrapp-ja`と`.header-name-wrapp-en`を変更します。

```html
<span class="header-name-wrapp-ja">研究室名を入力してください</span>
<span class="header-name-wrapp-en">Laboratory Name</span>
```

## ナビゲーション

ナビ項目は各`section`の`data-title`と`id`からJavaScriptが生成します。`#nav-list`の中へ直接リンクを書かないでください。

```html
<section
  data-accordion="normal"
  data-class="nav-default"
  data-title="NEWS"
  id="news"
  class="scroll-point"
></section>
```

`id`はページ内で重複させません。論文セクションは`data-accordion="nav-drop"`を維持します。

## 画像

画像を`assets/images/`へ置き、`src`と`alt`を変更します。ファイル名の大文字・小文字はGitHub Pagesで区別されます。

```html
<img
  src="./assets/images/sample-mv.png"
  alt="研究室のメインビジュアル（画像内容を具体的に説明）"
/>
```

人物、学生、大学ロゴ、共同研究先ロゴ等は掲載許可を確認してください。過去の版で削除された出典不明の画像やプロフィール画像を復活させないでください。

## NEWS

`.news-li-wrapp`直下の`li[data-more]`を複製し、新しい順に配置します。初期3件、4件目以降が「もっと見る」の対象です。

リンクなしNEWSでは`.is-link`と`a.link`を付けません。外部リンクがある場合だけ、次の安全属性を使います。

```html
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  class="link"
>記事を見る</a>
```

`href="#"`を仮リンクとして残さないでください。

## 研究テーマ

`.theme-wrapp`直下の`.theme-item`を複製します。番号はCSSカウンターで自動表示されます。

```html
<li class="theme-item">
  <h3 class="h3-number">研究テーマ名を入力してください</h3>
  <div class="theme-body">
    <p>研究の背景、目的、独自性を入力してください。</p>
  </div>
</li>
```

## モットー

`.motto-wrapp`直下の`li`を追加・削除し、見出しと本文を編集します。

## メンバーとOB・OG

`.member-wrapp`直下の`.member-li-wrapp[data-more]`がグループです。初期2グループ、3グループ目以降が「もっと見る」の対象です。

氏名、学年、職位、進路、所属先は必ず確認し、掲載許可を得てください。

## プロフィール

役職、氏名、英語名、経歴、受賞、学会をそれぞれ編集します。項目がない場合は架空情報で埋めず、プレースホルダーのままにするか項目を削除します。

画像を使う場合は`.profile-image-placeholder`を`img`へ置き換えます。縦横比3:4を推奨します。

## 論文・研究発表

`.mySwiper`のタブと`.mySwiper2`の内容スライドは、同じ順序・同じ数にします。

論文項目は各スライドの`ul.paper`へ追加します。初期6件、7件目以降が「もっと見る」の対象です。著者順、タイトル、誌名、巻号、年、DOI、URLを原資料と照合してください。

0件の場合は空の`ul.paper`と`.academic-empty`を使います。

## Contact

メールアドレスは`#tagText`の`value`へ入力します。

```html
<input id="tagText" type="text" value="contact@example.com" hidden readonly />
```

公開前に予約ドメインの値を実際の問い合わせ先へ変更し、コピー操作を確認してください。個人メールを使うか、研究室共有アドレスを使うかは組織規則に従ってください。

Google Mapsを掲載する場合は、自分の研究室所在地の正式な埋め込みコードだけを使用します。APIキーをHTMLへ書かないでください。

## meta、OGP、favicon

`title`、`description`、OG/Twitter用title・description・image・altを更新します。OGP画像、favicon、Apple Touch Iconのファイル参照が404にならないことを確認してください。

## デザイン

色、フォント、主要余白、角丸等は`assets/css/theme.css`を編集します。コンポーネント固有のレイアウトは`assets/css/style.css`です。`DESIGN.md`の現行仕様と維持要件を先に確認してください。

## 帰属表示

無料利用時は、`index.html`と`sample.html`のアカデメイア帰属表示、ロゴ、正式サービスリンクを削除・非表示化・別URL化しないでください。
