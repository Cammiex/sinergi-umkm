import PropTypes from 'prop-types';

const Button = ({ className, label, ...restProps }) => {
  return (
    <button className={`${className}`} {...restProps}>
      {label}
    </button>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
