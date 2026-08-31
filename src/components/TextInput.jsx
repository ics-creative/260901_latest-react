/**
 * 文字のinput
 * @param {Function} onChange 変更時の処理
 * @param {number} value inputの値
 * @param {string} label ラベル
 * @returns
 */
export const TextInput = ({ onChange, value, label }) => (
  <label className="text-input">
    <span className="text-input__label">{label}</span>
    <input onChange={onChange} type="text" value={value} />
  </label>
);
