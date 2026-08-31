import { wait } from "../../utils/resources.js";

/**
 * いいね状態の保存完了を待機します。
 * @param {boolean} value 更新する値
 */
export const saveLike = async (value) => {
  await wait(1400);
  return value;
};
