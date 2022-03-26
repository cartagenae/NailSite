import React from 'react';
import './Card.css';

const Card = ({
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  marginTop,
  opacity,
  padding,
  className,
  children,
}) => {
  const cardStyles = {
    width: width ? width : 300,
    height: height ? height: 200,
    backgroundColor: backgroundColor ? backgroundColor : '#000',
    borderRadius: borderRadius ? borderRadius : 25,
    color: color ? color : '#fff',
    marginTop: marginTop ? marginTop : 0,
    opacity: opacity ? opacity : '0.5',
    padding: padding ? padding : 0,
  }

  return (
    <div 
      className={`card ${className}`}
      style={cardStyles}
    >
      {children}
    </div>
  )
}

export default Card;
