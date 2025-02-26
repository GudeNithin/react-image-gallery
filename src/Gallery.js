import React from 'react';
import './App.css'; 

const Gallery = ({ data }) => {
  return (
    <div className="gallery-container">
      {data.map((image) => (
        <div className="gallery-item" key={image.id}>
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title || "Gallery Image"} height="200px" width="250px"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
