import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/29894015/pexels-photo-29894015/free-photo-of-festive-decor-on-classic-red-car-for-holidays.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/29815382/pexels-photo-29815382/free-photo-of-christmas-candle-with-decorated-fir-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/14928820/pexels-photo-14928820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function SelectedImage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  
  const handleClick = (image) => {
    setSelectedImage(image)
  }
  return (
    <>
      <div className="container">
        <div className="big-image">
          <img src={selectedImage} alt="img" />
        </div>
        <div className="thumbnails">
          {images.map((image, index) => {
            return (
              <div 
              className="thumbnail" 
              key={index} 
              onClick={() => handleClick(image)}>
                <img src={image} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {`
          .big-image img {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
          .thumbnail img {
            width: 100px;
            height: 100px;
            object-fit: cover;
          }
          .thumbnails {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        `}
      </style>
    </>
  );
}

export default SelectedImage;
