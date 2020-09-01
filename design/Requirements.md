### Introduction

Node.js の成果物として、スクレイピングプログラムを作成します。

### Description

ユーザは URL を入力することで、その中の h1~h6 タグを一覧表示として取得することができます。

### Features and Requirements

1. Functional Requirements
   - 横長の入力フォームと開始ボタン。ボタンのクリックでスクレイピング開始。結果はその下にリストで表示される
   - 入力可能なのは自分のポートフォリオだけとする（法律対策）
1. External Interface Requirements
   - なし
1. Nonfunctional Requirements
   - URL の入力中に、形式に関してのバリデーションチェックを行う
   - スクレイピングを開始して 3 秒以内に結果が表示される

### summarize

1. 横長の入力フォームと開始ボタンを表示する。(HTML)
1. ボタンクリックでスクレイピングの開始(Node.js)
1. 取得した結果をリスト形式で、入力フォームの下に表示する(HTML)

- スクレイピング(サーバ Ver)

1. URL とオプション引数のファイル形式を受け取る
1. URL のバリデーション
   - 正当な URL 形式か?
   - 許可された URL か?ホワイトリスト方式で
1. URL から HTML 構造を取得する
   - h1~h6 の見出しをすべて取得
1. オプション引数に応じた形式で出力する
   - デフォルトは console.log によるそのままの出力
   - JSON などの形式に対応

- スクレイピング(ブラウザ Ver)
