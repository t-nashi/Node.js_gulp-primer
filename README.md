# Node.js_gulp-primer
株式会社LIGさんの「Gulp.js入門」の記事を読んで作っていじったgulp環境

## このサンプル制作時の環境
* Windows10 Pro、64bit、32GB

## 事前に用意するもの
* Node.js（本サンプル制作時はv8.4.0）
* gulp.js（-g/グローバルインストール）

## 開発手順（win:cmd、mac:tarminal）
1. npm install （package.jsonにあるライブラリがインストールされる）
2. gulp （gulpfile.jsのdefaultコマンドが実行される。終了は ctrl+C 。）

## npm installでインストールされるライブラリ
* gulp
* gulp-autoprefixer
* gulp-frontnote
* gulp-sass
* gulp-uglify

## gulpで実行されること
* src ＞ public へファイル出力
* frontnoteでガイド作成
* autoprefixerでベンダープレフィックス付与
* sassからcssへ変換
* uglifyでjsファイル圧縮
* browser-syncでLiveReload

## 参考リンク
* [Gulp.js入門 - コーディングを10倍速くする環境を作る方法まとめ | 株式会社LIG](https://liginc.co.jp/web/tutorial/117900)

## 知っておくと便利なnpmコマンド一覧
* `npm root -g` … グローバルのルート（node_modules）を調べる
* `npm root` … プロジェクトのルート（node_modules）を調べる
* `npm ls -g --depth=0` … グローバルにインストールされているパッケージを確認
* `npm ls --depth=0` … プロジェクトにインストールされているパッケージを確認
* `npm init -y` … package.jsonをプロジェクトに生成（オプション「-y」が全てyes回答のショートカット）
* `npm install xxxxx --save` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（dependencies）
* `npm i xxxxx -s` … 上記のショートカットバージョン
* `npm install xxxxx --save-dev` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（devDependencies-開発用）
* `npm i xxxxx -D` … 上記のショートカットバージョン
* `npm -v` … npmのバージョンを表示
* `npm run` … package.json - scriptに記載した一覧が見れる
* `npm show` … package.jsonを表示
* `npm remove -g xxxxx` … グローバルのパッケージをアンインストール
* `npm remove xxxxx` … プロジェクトのパッケージをアンインストール
