export const ToggleGroup = ({ label, options, value, onChange }) => (
  <fieldset className="toggle-group">
    <legend>{label}</legend>
    <div className="toggle-group__buttons">
      {options.map((option) => (
        <button
          aria-pressed={value === option.value}
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
          className={value === option.value && "active"}
        >
          {option.label}
        </button>
      ))}
    </div>
  </fieldset>
);
