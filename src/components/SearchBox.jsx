/**
 * 文字検索用の入力欄
 * @param {string} value 入力値
 * @param {(value: string) => void} onChange 変更時の処理
 */
export const SearchBox = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <label className="search-box">
      <span className="search-box__label">Search people</span>
      <input
        onChange={handleChange}
        placeholder="Try Design or Alex"
        type="search"
        value={value}
      />
    </label>
  );
};
