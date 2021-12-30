import colorNames from "colornames";

const Form = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        required
      />

      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text color
      </button>
    </form>
  );
};

export default Form;
