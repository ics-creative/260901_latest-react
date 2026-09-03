ICS MEDIA『useStateとuseEffectだけじゃもったいない！ ユーザー体験を改善するReactの便利機能』のサンプルコードです。

以下のURLからデモを確認できます。

1. [Suspenseによるローディング](https://ics-creative.github.io/260901_latest-react/#/suspense)
2. [useTransitionによるUIのブロック回避](https://ics-creative.github.io/260901_latest-react/#/transition)
3. [useDeferredValueによる遅延更新](https://ics-creative.github.io/260901_latest-react/#/deferred)
4. [useOptimisticによる楽観的更新](https://ics-creative.github.io/260901_latest-react/#/optimistic)
5. [Activityによる状態保持](https://ics-creative.github.io/260901_latest-react/#/activity)

## 使用したアイコン画像

ハートのアイコン画像はLucideの[Heart](https://lucide.dev/icons/heart)を使用しています。

## 使用した写真

このデモで使用した写真はUnsplashから取得しました。

- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E5%BA%8A%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E8%8C%B6%E8%89%B2%E3%81%AE%E3%81%B6%E3%81%A1%E3%81%AE%E5%AD%90%E7%8C%AB-nKC772R_qog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Edgar](https://unsplash.com/ja/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/brown-fox-on-snow-field-xUUZcpQlqpM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Ray Hennessy](https://unsplash.com/ja/@rayhennessy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8%E8%89%B2%E3%81%AE%E3%82%AA%E3%82%A6%E3%83%A0-aeNg4YA41P8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Kevin Mueller](https://unsplash.com/ja/@kevinmueller?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%98%BC%E9%96%93%E3%83%93%E3%83%BC%E3%83%81%E3%82%92%E8%B5%B0%E3%82%8B%E7%8A%AC-yihlaRCCvd4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Oscar Sutton](https://unsplash.com/ja/@o5ky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E4%BD%8E%E3%81%84%E5%A4%AA%E9%99%BD%E3%82%92%E8%83%8C%E6%99%AF%E3%81%AB%E4%BA%BA%E3%80%85%E3%81%AE%E3%82%B7%E3%83%AB%E3%82%A8%E3%83%83%E3%83%88%E3%81%8C%E6%8F%8F%E3%81%8B%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B-Yh88Ag5d98M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Oleksii Tsaryuk](https://unsplash.com/ja/@photobyredder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%9A%97%E9%97%87%E3%81%AE%E4%B8%AD%E3%81%A7%E6%9B%B2%E3%81%8C%E3%81%A3%E3%81%9F%E6%8C%87%E3%81%AE%E6%89%8B-yYDBMjeq_Xw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Dmytro Bayer](https://unsplash.com/ja/@dmytrobayer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E5%B7%9D%E3%81%AE%E8%BF%91%E3%81%8F%E3%82%92%E6%AD%A9%E3%81%8F%E5%B9%BC%E5%85%90%E3%81%AE%E6%B5%85%E3%81%84%E7%84%A6%E7%82%B9%E3%81%AE%E5%86%99%E7%9C%9F-JZ51o_-UOY8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Daiga Ellaby](https://unsplash.com/ja/@daiga_ellaby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
- [Unsplash](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/low-angle-photography-of-building-VviFtDJakYk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)の[Matthew Henry](https://unsplash.com/ja/@matthewhenry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)が撮影した写真
