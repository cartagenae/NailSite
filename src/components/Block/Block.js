import React from 'react';

import './Block.css';

const Block = ({
  className,
  children
}) => {
  return (
    <div className={`container-fluid ${className}`}>
      {children}
    </div>
  )
}

export default Block;
