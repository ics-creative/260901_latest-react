/**
 * 選択肢のselect
 * @param {{ value: string, label: string }[]} list 表示する選択肢
 * @param {Function} onChange 変更時の処理
 * @param {string} value selectの値
 * @param {string} label 表示sラベル
 * @returns
 */
export const SelectBox = ({ list, onChange, value, label }) => (
  <label className="select-box">
    <span className="select-box__label" for="">
      {label}
    </span>
    <select className="select-box__item" onChange={onChange} value={value}>
      {list.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  </label>
);
