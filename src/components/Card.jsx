import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  image, 
  productId,
  title, 
  price, 
  isActive = false,
  className = '',
  imageClassName = '',
  titleClassName = '',
  priceClassName = '',
  onClick,
  ...props 
}) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
     <img 
  src={image} 
  alt={title} 
  className={`object-cover transition-all duration-300 ease-in-out 
    ${isActive 
      ? "w-[192px] h-[256px] md:w-[354px] md:h-[472px]" 
      : "w-[163px] h-[217px] md:w-[300px] md:h-[400px] rounded-b-[12px] mx-2 sm:mx-3 md:mx-4"}`}
  />

    
    <div
  className={`absolute bottom-8 left-6 space-y-2 transition-opacity duration-200 ${
    isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'
  }`}
>
  <div className="bg-white/50 rounded-xl px-4 py-2 w-fit">
    <p className={`text-2xl text-[#2f241f] ${priceClassName}`}>{price}</p>
  </div>
  <h3 className={`text-4xl md:text-5xl text-white ${titleClassName}`}>
    {title}
  </h3>
</div>

    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  price: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  priceClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;