import { useState } from "react";
import { NumberInput } from "../../components/NumberInput.jsx";
import { ToggleGroup } from "../../components/ToggleGroup.jsx";
import { calculateTotal, getUnitPrice } from "./calculateOrderPrice.js";
import { productColors, productSizes } from "./productVariants.js";

/**
 * 色とサイズごとの単価から、数量に応じた合計金額を計算します。
 * Transitionなし
 */
export const NoTransition = () => {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleColorChange = async (nextColor) => {
    setColor(nextColor);
    setTotal(await calculateTotal(nextColor, size, quantity));
  };

  const handleSizeChange = async (nextSize) => {
    setSize(nextSize);
    setTotal(await calculateTotal(color, nextSize, quantity));
  };

  const handleQuantityChange = async (event) => {
    const nextQuantity = Number(event.target.value)
    setQuantity(nextQuantity);
    setTotal(await calculateTotal(color, size, nextQuantity));
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
        <dd>¥{total.toLocaleString()}</dd>
      </dl>
    </div>
  );
};
