import React, { useState, useEffect } from "react";
import "./ImageCube.css";

const ImageCube = () => {
  const [currentFace, setCurrentFace] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((currentFace + 1) % 6 || 6);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentFace]);

  return (
    <div className="contenedor">
      <div className="caja">
        {[1, 2, 3, 4, 5, 6].map((face) => (
          <div
            key={face}
            className={`cara cara${face} ${currentFace === face ? "visible" : ""}`}
          >
            <img src={`${process.env.PUBLIC_URL}/images/image (${face}).png`} alt={`Image ${face}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCube;
