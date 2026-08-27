# 最近のReactで変わる画面実装 デモ

ICS MEDIAの記事「最近のReactで変わる画面実装」用のデモです。1つのViteアプリに、次のデモを収録しています。

- Suspenseによる部分ローディングと画面全体ローディング
- useTransitionの使用有無
- useDeferredValueの使用有無
- useOptimisticとuseActionStateによる楽観的更新
- Activityによる入力値の保持とプリレンダリング
- ViewTransitionによる画面遷移アニメーション

`<ViewTransition>`を使用するため、React Canaryを利用しています。React CompilerはViteのReactプラグインから有効化しています。

## 開発

```sh
npm install
npm run dev
```

## 静的ファイルの生成

```sh
npm run build
```

生成物は`docs`ディレクトリに出力されます。ルーティングにはURLのハッシュを利用しているため、GitHub Pagesで各デモを直接開けます。


<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E5%BA%8A%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E8%8C%B6%E8%89%B2%E3%81%AE%E3%81%B6%E3%81%A1%E3%81%AE%E5%AD%90%E7%8C%AB-nKC772R_qog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar</a>が撮影した写真の<a href="https://unsplash.com/ja/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/brown-fox-on-snow-field-xUUZcpQlqpM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@rayhennessy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ray Hennessy</a>が撮影した写真の<a href="https://unsplash.com/ja/@rayhennessy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ray Hennessy</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8%E8%89%B2%E3%81%AE%E3%82%AA%E3%82%A6%E3%83%A0-aeNg4YA41P8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@kevinmueller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Mueller</a>が撮影した写真の<a href="https://unsplash.com/ja/@kevinmueller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Mueller</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%98%BC%E9%96%93%E3%83%93%E3%83%BC%E3%83%81%E3%82%92%E8%B5%B0%E3%82%8B%E7%8A%AC-yihlaRCCvd4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@o5ky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oscar Sutton</a>が撮影した写真の<a href="https://unsplash.com/ja/@o5ky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oscar Sutton</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E4%BD%8E%E3%81%84%E5%A4%AA%E9%99%BD%E3%82%92%E8%83%8C%E6%99%AF%E3%81%AB%E4%BA%BA%E3%80%85%E3%81%AE%E3%82%B7%E3%83%AB%E3%82%A8%E3%83%83%E3%83%88%E3%81%8C%E6%8F%8F%E3%81%8B%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B-Yh88Ag5d98M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@photobyredder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oleksii Tsaryuk</a>が撮影した写真の<a href="https://unsplash.com/ja/@photobyredder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oleksii Tsaryuk</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%9A%97%E9%97%87%E3%81%AE%E4%B8%AD%E3%81%A7%E6%9B%B2%E3%81%8C%E3%81%A3%E3%81%9F%E6%8C%87%E3%81%AE%E6%89%8B-yYDBMjeq_Xw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@dmytrobayer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmytro Bayer</a>が撮影した写真の<a href="https://unsplash.com/ja/@dmytrobayer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmytro Bayer</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E5%B7%9D%E3%81%AE%E8%BF%91%E3%81%8F%E3%82%92%E6%AD%A9%E3%81%8F%E5%B9%BC%E5%85%90%E3%81%AE%E6%B5%85%E3%81%84%E7%84%A6%E7%82%B9%E3%81%AE%E5%86%99%E7%9C%9F-JZ51o_-UOY8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@daiga_ellaby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daiga Ellaby</a>が撮影した写真の<a href="https://unsplash.com/ja/@daiga_ellaby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daiga Ellaby</a>が撮影したイラスト素材
<a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/low-angle-photography-of-building-VviFtDJakYk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/ja/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matthew Henry</a>が撮影した写真の<a href="https://unsplash.com/ja/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matthew Henry</a>が撮影したイラスト素材