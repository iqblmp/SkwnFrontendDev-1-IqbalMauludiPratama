import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseClasses = 'w-full focus:outline-none';
  const inputClasses = `${baseClasses} ${className}`;
  
  return (
    <div className="relative flex items-center">
      {iconPosition === 'left' && icon && (
        <div className="absolute left-3">{icon}</div>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`${inputClasses} ${iconPosition === 'left' ? 'pl-10' : ''} ${iconPosition === 'right' ? 'pr-10' : ''}`}
        {...props}
      />
      
      {iconPosition === 'right' && icon && (
        <div className="absolute right-3">{icon}</div>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default InputField;