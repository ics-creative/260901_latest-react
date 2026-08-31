import { useState, useTransition } from "react";
import { NumberInput } from "../../components/NumberInput.jsx";
import { ToggleGroup } from "../../components/ToggleGroup.jsx";
import { calculateTotal, getUnitPrice } from "./calculateOrderPrice.js";
import { productColors, productSizes } from "./productVariants.js";

/**
 * 色とサイズごとの単価から、数量に応じた合計金額を計算します。
 */
export const Transition = () => {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // useTransitionフック
  const [isPending, startTransition] = useTransition();

  const handleColorChange = (nextColor) => {
    setColor(nextColor);
    startTransition(async () => {
      // 時間がかかる計算処理はstartTransitionを使う
      const calculated = await calculateTotal(nextColor, size, quantity);
      startTransition(() => {
        // 再度startTransitionでstateを更新
        setTotal(calculated);
      });
    });
  };

  const handleSizeChange = (nextSize) => {
    setSize(nextSize);
    startTransition(async () => {
      // 時間がかかる計算処理はstartTransitionを使う
      const calculated = await calculateTotal(color, nextSize, quantity);
      startTransition(() => {
        // 再度startTransitionでstateを更新
        setTotal(calculated);
      });
    });
  };

  const handleQuantityChange = (event) => {
    const nextQuantity = Number(event.target.value);
    setQuantity(nextQuantity);
    startTransition(async () => {
      const calculated = await calculateTotal(color, size, nextQuantity);
      // 時間がかかる計算処理はstartTransitionを使う
      startTransition(() => {
        // 再度startTransitionでstateを更新
        setTotal(calculated);
      });
    });
  };

  const unitPrice = getUnitPrice(color, size);

  return (
    <div className="transition">
      <div className="transition__controls">
        <ToggleGroup
          label="Color"
          onChange={handleColorChange}
          options={productColors}
          value={color}
        />
        <ToggleGroup
          label="Size"
          onChange={handleSizeChange}
          options={productSizes}
          value={size}
        />
        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <dl className="transition__results">
        <dt>Unit price:</dt>
        <dd>¥{unitPrice.toLocaleString()}</dd>
        <dt>Total:</dt>
        {/** transition中のpending中は「calculating」表示を出す */}
        <dd>{isPending ? "calculating..." : `¥${total.toLocaleString()}`}</dd>
      </dl>
    </div>
  );
};
