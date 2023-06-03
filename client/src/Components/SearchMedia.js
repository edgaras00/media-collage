import React, { useState, useContext, useEffect } from "react";
import { CollageContext } from "../Context/CollageContext";

import Modal from "react-modal";
import Cover from "./Cover";

import { replaceSpaces } from "../utils";
import "../styles/searchMedia.css";

const SearchMedia = ({ setBoxes }) => {
  // A functional modal component that lets the user search for media images

  // Component state
  // Controlled search input value
  const [search, setSearch] = useState("");

  // Array of media image objects that are presented on the search modal
  // for the user to select the image to add it to the collage
  const [searchData, setSearchData] = useState([]);

  const { displaySearch, closeSearch, searchMode } = useContext(CollageContext);

  useEffect(() => {
    if (!displaySearch) {
      setSearchData([]);
      setSearch("");
    }
  }, [displaySearch]);

  // Build a different query for a different search mode
  let query;
  let baseUrl = "https://mediacharts.onrender.com";
  if (process.env.REACT_APP_ENV === "development") {
    baseUrl = "";
  }
  switch (searchMode) {
    case "music":
      query = `${baseUrl}/api/music?query=${replaceSpaces(search)}`;
      break;
    case "movies":
      query = `${baseUrl}/api/movies?query=${replaceSpaces(search)}`;
      break;
    case "tv":
      query = `${baseUrl}/api/tv?query=${replaceSpaces(search)}`;
      break;
    case "anime":
      query = `${baseUrl}/api/anime?query=${replaceSpaces(search)}`;
      break;
    case "videogames":
      query = `${baseUrl}/api/games?query=${replaceSpaces(search)}`;
      break;
    default:
  }
  const getData = async () => {
    try {
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error("404: Media not found");
      }
      const data = await response.json();
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event) => {
    // Function that submits user's query with Enter/Return key
    if (event.keyCode === 13) {
      getData();
    }
  };

  // Create coverComponents that are presented on the search modal
  const coverComponents = searchData.map((item, index) => {
    // Different API data is differently structured
    let image, artist, name;
    switch (searchMode) {
      case "music":
        image = item.image[2]["#text"];
        artist = item.artist;
        name = item.name;
        break;
      case "movies":
        image = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
        name = item.title;
        break;
      case "tv":
        image = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
        name = item.name;
        break;
      case "anime":
        image = item.image_url;
        name = item.title;
        break;
      case "videogames":
        image = item.background_image;
        name = item.name;
        break;
      default:
    }
    return (
      <Cover
        image={image}
        name={name}
        artist={artist}
        key={index + name}
        setBoxes={setBoxes}
      />
    );
  });

  // Placeholder for the search input and modal header
  // Lets the user know what to search
  let searchItem;
  let searchPlaceholder;
  switch (searchMode) {
    case "music":
      searchItem = "an album";
      searchPlaceholder = "Artist/album name";
      break;
    case "movies":
      searchItem = "a movie";
      searchPlaceholder = "Movie title";
      break;
    case "videogames":
      searchItem = "a video game";
      searchPlaceholder = "Video game title";
      break;
    case "tv":
      searchItem = "a TV show";
      searchPlaceholder = "TV show title";
      break;
    case "anime":
      searchItem = "an anime";
      searchPlaceholder = "Anime title";
      break;
    default:
      break;
  }

  return (
    <Modal
      isOpen={displaySearch}
      className="modal"
      onRequestClose={closeSearch}
      ariaHideApp={false}
    >
      <div className="search-box">
        <div className="search-header">
          <h2>
            <span role="img" aria-label="search icon">
              &#128269;
            </span>{" "}
            Search for {searchItem}
          </h2>
          <button className="close" onClick={closeSearch}>
            X
          </button>
        </div>
        <div className="searchbar">
          <input
            type="search"
            name="search"
            value={search}
            placeholder={searchPlaceholder}
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="search-results">{coverComponents}</div>
        </div>
        <div className="search-button">
          <button onClick={getData}>Search</button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchMedia;
