import { useState, useTransition } from "react";
import { CompareGrid } from "../components/CompareGrid.jsx";
import { products } from "../data/catalog.js";

const colors = [
  { value: "all", label: "すべて" },
  { value: "blue", label: "ブルー" },
  { value: "pink", label: "ピンク" },
  { value: "green", label: "グリーン" },
  { value: "yellow", label: "イエロー" },
];

const ProductResults = ({ color, maxPrice }) => {
  const matches = [];
  let checksum = 0;

  for (const product of products) {
    for (let step = 0; step < 26; step += 1) {
      checksum += (product.score * (step + 3)) % 17;
    }
    if (
      product.price <= maxPrice &&
      (color === "all" || product.color === color)
    ) {
      matches.push(product);
    }
  }

  return (
    <div className="results-area">
      <p>
        <strong>{matches.length.toLocaleString()}</strong>件 / 計算ID{" "}
        {checksum % 997}
      </p>
      <div className="mini-products">
        {matches.slice(0, 8).map((product) => (
          <article key={product.id}>
            <span className={`swatch swatch--${product.color}`} />
            <strong>{product.name}</strong>
            <small>¥{product.price.toLocaleString()}</small>
          </article>
        ))}
      </div>
    </div>
  );
};

const Controls = ({ color, maxPrice, onColorChange, onPriceChange }) => (
  <div className="controls">
    <fieldset className="segmented">
      <legend className="visually-hidden">色で絞り込む</legend>
      {colors.map(({ value, label }) => (
        <button
          aria-pressed={color === value}
          key={value}
          onClick={() => onColorChange(value)}
          type="button"
        >
          {label}
        </button>
      ))}
    </fieldset>
    <label className="range-control">
      <span>
        価格の上限 <strong>¥{Number(maxPrice).toLocaleString()}</strong>
      </span>
      <input
        max="20000"
        min="2000"
        onChange={(event) => onPriceChange(Number(event.target.value))}
        step="500"
        type="range"
        value={maxPrice}
      />
    </label>
  </div>
);

const WithoutTransition = () => {
  const [filters, setFilters] = useState({ color: "all", maxPrice: 12000 });
  return (
    <>
      <Controls
        color={filters.color}
        maxPrice={filters.maxPrice}
        onColorChange={(color) => setFilters({ ...filters, color })}
        onPriceChange={(maxPrice) => setFilters({ ...filters, maxPrice })}
      />
      <ProductResults {...filters} />
    </>
  );
};

const WithTransition = () => {
  const [controls, setControls] = useState({
    color: "all",
    maxPrice: 12000,
  });
  const [filters, setFilters] = useState(controls);
  const [isPending, startTransition] = useTransition();

  const updateFilters = (next) => {
    setControls(next);
    startTransition(() => setFilters(next));
  };

  return (
    <>
      <Controls
        color={controls.color}
        maxPrice={controls.maxPrice}
        onColorChange={(color) => updateFilters({ ...controls, color })}
        onPriceChange={(maxPrice) => updateFilters({ ...controls, maxPrice })}
      />
      <div className={isPending ? "pending-content" : undefined}>
        <ProductResults {...filters} />
      </div>
      <p className="status-line" aria-live="polite">
        {isPending ? "表示を更新しています…" : "最新の条件を表示中"}
      </p>
    </>
  );
};

/**
 * useTransitionの使用有無を比較するページを表示します。
 */
export const Transition = () => (
  <>
    <h1>重いstate更新の優先度を比べる</h1>
    <p>
      価格スライダーを素早く動かしてください。左は結果計算が操作を遮り、右は入力を先に反映して結果をバックグラウンドで更新します。
    </p>
    <CompareGrid>
      <WithoutTransition />
      <WithTransition />
    </CompareGrid>
  </>
);
