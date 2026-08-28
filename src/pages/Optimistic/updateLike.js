import { wait } from "../../utils/resources.js";

/**
 * いいね状態の保存完了を待機します。
 */
export const saveLike = async () => {
  await wait(1400);
  return true;
};
