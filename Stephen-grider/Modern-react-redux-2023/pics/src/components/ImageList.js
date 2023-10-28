import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  return (
    <div>
      {images.map((image, index) => {
        return <ImageShow key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
