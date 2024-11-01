import "./display-grid.scss";
import { images } from "../../../assets/images/extras-grid-items/images";

export const FirstGrid = () => {
  const firstGridImages = images.slice(0, 4);
  return (
    <div className="display-grid first-grid">
      {firstGridImages.map((image, index) => (
        <div key={index} className="grid-item-container">
          <img src={image.src} alt={image.description} className="grid-image" />

          <div className="grid-image-caption">{image.description}</div>
        </div>
      ))}
    </div>
  );
};

export const SecondGrid = () => {
  const secondGridImages = images.slice(4);
  return (
    <div className="display-grid second-grid">
      {secondGridImages.map((image, index) => (
        <div key={index + 4} className="grid-item-container">
          <img src={image.src} alt={image.description} className="grid-image" />
          <div className="grid-image-caption">{image.description}</div>
        </div>
      ))}
    </div>
  );
};
