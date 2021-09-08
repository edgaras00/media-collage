import React from "react";
import "../styles/cover.css";

const Cover = ({ image, artist, name, handleClick }) => {
  // Functional cover component
  // This component is used in the SearchmMedia modal component
  // Showed as a search result and contains info such as artist/title
  return (
    <div>
      <img
        className="search-cover"
        src={image}
        alt={`${artist} - ${name}`}
        onClick={() => handleClick(image, artist, name)}
      />
    </div>
  );
};

export default Cover;
