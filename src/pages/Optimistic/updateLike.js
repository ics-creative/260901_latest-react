import { delayedPromise } from "../../logics/delayedPromise.js";

/**
 * いいね状態の保存完了を待機します。
 * @param {boolean} value 更新する値
 */
export const saveLike = async (value) => delayedPromise(value, 1000);
