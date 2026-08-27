import { delayedPromise } from "../logics/delayedPromise";

/**
 * 指定時間が経過するまで待機します。
 *
 * @param {number} milliseconds 待機時間
 */
export const wait = (milliseconds) =>
  new Promise((resolve) => window.setTimeout(resolve, milliseconds));

/**
 * Suspenseの比較に使用するデータ取得Promiseを作成します。
 */
export const createDashboardResources = () => ({
  users: delayedPromise(
    [
      { id: 1, name: "佐藤 美咲", role: "デザイナー" },
      { id: 2, name: "田中 蓮", role: "エンジニア" },
      { id: 3, name: "鈴木 葵", role: "ディレクター" },
    ],
    700,
  ),
  profile: delayedPromise(
    {
      name: "佐藤 美咲",
      bio: "デザインシステムとアクセシビリティーを担当しています。",
      projects: 12,
    },
    1500,
  ),
  related: delayedPromise(["高橋 悠真", "伊藤 結衣", "山本 湊"], 2300),
});

/**
 * プリレンダリングに使用するレポート取得Promiseを作成します。
 */
export const createReportResource = () =>
  delayedPromise(
    {
      score: 86,
      change: "+12%",
      summary: "直近30日間で継続率が改善しています。",
    },
    2400,
  );
