import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';

import './ParallaxImage.css';

const ParallaxImage = ({
  className,
  disabled,
  image,
  children,
}) => {
  let strength = 0;
  if (window.innerWidth <= 325) {
    strength = 600;
  }
  else if(window.innerWidth <= 400) {
    strength = 700;
  }
  else if(window.innerWidth <= 425) {
    strength = 800;
  }
  else if(window.innerWidth <= 800) {
    // if the phone is turned sideways
    if(window.innerHeight <= 420) {
      strength = 400;
    }
    else {
      strength = 1000;
    }
  }
  else if(window.innerWidth <= 850) {
    strength = 1100;
  }
  else {
    strength = 1200;
  }

  useEffect(() => {
    console.log(window.innerWidth);
  })

  return (
    <Parallax
      bgImage={image}
      strength={strength}
      className={`parallax-image ${className}`}
      disabled={disabled ? disabled : false}
    >
      {children}
    </Parallax>
  )
}

export default ParallaxImage;
