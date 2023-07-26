import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn-medium', 'btn--large'];

function Button({ children, buttonStyle, buttonSize, dest, onClick }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={dest}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  buttonSize: PropTypes.string.isRequired,
  dest: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default Button;
