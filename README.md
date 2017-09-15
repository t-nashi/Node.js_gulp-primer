# Node.js_gulp-primer

## このサンプル制作時の環境
* Windows10 Pro、64bit、32GB

## 事前に用意するもの
* Node.js（本サンプル制作時はv8.4.0）
* gulp.js（-g/グローバルインストール）

## 開発手順（win:cmd、mac:tarminal）
1. npm install （package.jsonにあるライブラリがインストールされる）
2. gulp （gulpfile.jsのdefaultコマンドが実行される）

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
