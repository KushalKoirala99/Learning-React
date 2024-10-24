import PropTypes from "prop-types";
import './button.css';

const Button = ({ onclick }) => {
  return (
    <>
      <button onClick={onclick} className="add-btn">Add</button>
    </>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};

export default Button;
