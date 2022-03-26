import React from 'react';
import './Footer.css';

const Footer = ({
  className,
  children,
}) => {
  return (
    <div className={`container-fluid ${className}`}>
      {children}
    </div>
  )
}

export default Footer;
