import React from 'react';
import './ButtonFrost.css';

const ButtonFrost = ({ onClick, children, width, height }) => {
  const style = {
    width,  
    height 
  };

  return (
    <button className="button-frost" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default ButtonFrost;