import React from 'react';
import './ButtonFrost.css'; 

const ContainerFrost = ({ children, width, height, padding }) => {
  
  const style = {
    width,  
    height, 
    padding, 
  };

  return (
    <div className="button-frost" style={style}>
      {children}
    </div>
  );
};

export default ContainerFrost;