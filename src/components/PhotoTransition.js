import React from 'react';
import './PhotoTransition.css';
import profilbilde from "../images/profilbilde.png";
import profilbilde_ai from "../images/profilbilde_ai.png";


const PhotoTransition = ({ height = '100%', width = '100%' }) => {
  return (
    <div className="photo-transition-container" style={{ height, width }}>
      <img src={profilbilde_ai} alt="Default" className="image-default" />
      <img src={profilbilde} alt="Hover" className="image-hover" />
    </div>
  );
};

export default PhotoTransition;