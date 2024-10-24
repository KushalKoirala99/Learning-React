import PropTypes from "prop-types";
import "./buttons.css";

function Button({ value, onClick }) {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {value}
      </button>
    </>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
