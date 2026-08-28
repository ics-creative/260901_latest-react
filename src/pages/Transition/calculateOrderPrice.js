import { delayedPromise } from "../../logics/delayedPromise.js";
import { productPrices } from "./productVariants.js";

/**
 * 単価を取得する
 * @param {string} color
 * @param {stirng} size
 */
export const getUnitPrice = (color, size) => productPrices[color][size];

/**
 * 合計金額を計算する
 * @param {string} color
 * @param {string} size
 * @param {number} quantity
 */
export const calculateTotal = (color, size, quantity) =>
  delayedPromise(getUnitPrice(color, size) * quantity, 600);
