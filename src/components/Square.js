const Square = ({ colorValue, colorProps, hexValue, isDarkText }) => {
  return (
    <div style={colorProps} className="display-box">
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default Square;
