/**
 * 数字のinput
 * @param {Function} onChange 変更時の処理
 * @param {number} value inputの値
 * @param {string} label ラベル
 * @returns
 */
export const NumberInput = ({ onChange, value, label }) => (
  <label className="number-input">
    <span className="number-input__label">{label}</span>
    <input min="0" onChange={onChange} step="1" type="number" value={value} />
  </label>
);
