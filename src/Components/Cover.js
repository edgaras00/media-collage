import React, { useContext } from "react";
import { CollageContext } from "../Context/CollageContext";
import "../styles/cover.css";

const Cover = ({ image, artist, name, setBoxes }) => {
  // Functional cover component
  // This component is used in the SearchmMedia modal component
  // Showed as a search result and contains info such as artist/title

  // const { selectedId, setBoxes, closeSearch } = useContext(CollageContext);
  const { selectedId, closeSearch, searchMode } = useContext(CollageContext);

  const handleClick = () => {
    console.log(artist, name);
    setBoxes((prevBoxes) => {
      const modified = prevBoxes.map((box) => {
        let mediaName = searchMode === "music" ? `${artist} - ${name}` : name;
        if (box.id === selectedId) {
          return {
            ...box,
            image,
            data: mediaName,
          };
        }
        return box;
      });
      return modified;
    });
    closeSearch();
  };

  return (
    <div>
      <img
        className="search-cover"
        src={image}
        alt={`${artist} - ${name}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Cover;
