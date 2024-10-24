import PropTypes from "prop-types";

const Input = ({ value, onInputChange }) => {
  return (
    <>
      <input type="text" value={value.name} onChange={onInputChange}></input>
    </>
  );
};

Input.propTypes = {
  value: PropTypes.object,
  onInputChange: PropTypes.func,
};

export default Input;
