
// モジュール読み込み
var gulp = require("gulp");								// gulpを呼び出す
var sass = require("gulp-sass");						// gulpでのsass利用
var autoprefixer = require("gulp-autoprefixer");		// ベンダプレフィックス付与
var frontnote = require("gulp-frontnote");				// スタイルガイド生成
var uglify = require("gulp-uglify");					// JavaScriptの圧縮
var browser = require("browser-sync");					// LiveReload環境構築

// サーバー実行
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./public/",    // ベースとなるフォルダ
            index: "index.html"      // 起動時に開かれるページ
        },
        files: "./public/**/*.*",    // 監視対象パス
        open: 'external',            // IPアドレスアクセス
        tunnel: true,                // 外部アクセス制御
        port: 3000                   // port番号
    });
});

// jsファイル圧縮
gulp.task("js", function() {
    gulp.src(["./src/js/**/*.js","!./src/js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./public/js/min"))
        // .pipe(browser.reload({stream:true}))
});

// sass
gulp.task("sass", function() {			// gulp.task(“タスク名”,function() {});でタスクの登録をおこないます。
    gulp.src("./src/sass/**/*scss")			// gulp.src(“MiniMatchパターン”)で読み出したいファイルを指定します。
        .pipe(frontnote({
            css: '../public/css/style.css'
        }))
        .pipe(sass())					// pipe(おこないたい処理)でsrcで取得したファイルに処理を施します
        .pipe(autoprefixer())			// ベンダープレフィックス付与
        .pipe(gulp.dest("./public/css"))		// gulp.dest(“出力先”)で出力先に処理を施したファイルを出力します。
        // .pipe(browser.reload({stream:true}))
});

// 「gulp」で実行のタスク （ファイルの監視/js/sass、サーバー実行）
gulp.task("default",['js','sass','server'], function() {
    //ファイルの監視をして変化があったらタスクを実行
    gulp.watch(["./src/js/**/*.js","!./src/js/min/**/*.js"],["js"]);
    gulp.watch("./src/sass/**/*.scss",["sass"]);
});
