/**
 * 指定時間後に値を返すPromiseを作成します。
 *
 * @param {any} value 解決時に返す値
 * @param {number} milliseconds 遅延時間
 */
export const delayedPromise = (value, milliseconds) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(value), milliseconds);
  });
