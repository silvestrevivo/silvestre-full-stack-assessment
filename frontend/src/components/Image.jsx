import { useState } from "react";
import PropTypes from "prop-types";
import placeholder from "../assets/image/company-23.png";

const ImageComponent = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  const placeHolderImage = placeholder;

  const handleError = () => {
    setHasError(true); // Set error state to true when image fails to load
  };

  return (
    <img
      src={hasError ? placeHolderImage : src} // Use placeholder if there's an error
      alt={alt}
      className={`w-6 h-6 rounded ${hasError && "bg-gray-100 p-0.5"}`}
      onError={handleError} // Set the handler for errors
    />
  );
};

// Define prop types
ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;
