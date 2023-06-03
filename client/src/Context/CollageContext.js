import React, { useState } from "react";
// React Context that holds the app states that are accessible to multiple
// components in the app

const CollageContext = React.createContext();

const CollageContextProvider = (props) => {
  // Options context
  const [numRows, setNumRows] = useState(3);
  const [numCols, setNumCols] = useState(3);
  const [displayTitles, setDisplayTitles] = useState(false);
  const [color, setColor] = useState("#000");
  const [fontColor, setFontColor] = useState("#fff");
  const [firstGradientColor, setFirstGradientColor] = useState("#20BF55");
  const [secondGradientColor, setSecondGradientColor] = useState("#01BAEF");
  const [boxMargin, setBoxMargin] = useState(1);
  const [fontFamily, setFontFamily] = useState("Courier");

  // Turn on/off the drag and sort option
  const [sort, setSort] = useState(false);
  // Array of randomly selected artwork images (Generate Random)
  const [randomList, setRandomList] = useState([]);
  // State for shuffling images
  // State integer keeps getting incremented to rerender the new collage
  const [shuffled, setShuffled] = useState(0);
  // State to clear the collage / grid
  const [clear, setClear] = useState(false);
  // State for what media to search (music, movies, anime, tv, videogames)
  const [searchMode, setSearchMode] = useState("music");
  // State for box / cell grid type (square | rectangle)
  const [boxType, setBoxType] = useState("square");
  // State for background color mode (regular | gradient)
  const [backgroundMode, setBackgroundMode] = useState("regular");
  // State for border radius
  const [borderRadius, setBorderRadius] = useState(0);
  // State for gradient angle
  const [gradientAngle, setGradientAngle] = useState(20);

  // Collage context
  // State for the selected box id
  const [selectedId, setSelectedId] = useState("");

  // Display search modal (true/false)
  const [displaySearch, setDisplaySearch] = useState(false);

  // Options functions

  const getId = (id) => {
    // Function that sets selectedId as the clicked-on box id
    // and opens the search modal
    setSelectedId(id);
    setDisplaySearch(true);
  };

  const closeSearch = () => {
    // Function that closes the search modal
    setDisplaySearch(false);
  };

  const generateRandomCollage = async (rows, cols) => {
    // Function that generates a random music artwork collage
    const numItems = rows * cols;
    let url = `https://mediacharts.onrender.com/api/random/music?items=${numItems}`;
    if (process.env.REACT_APP_ENV === "development") {
      url = `api/random/music?items=${numItems}`;
    }
    const response = await fetch(url);
    const musicData = await response.json();
    setRandomList(musicData);
  };

  const generateRandomAnimeCollage = async () => {
    // Function to fetch random anime data

    try {
      let url = "https://mediacharts-api.onrender.com/api/random/anime";
      if (process.env.REACT_APP_ENV === "development") {
        url = "/api/random/anime";
      }
      const response = await fetch(url);
      const animeData = await response.json();
      setRandomList(animeData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomMovieCollage = async (rows, cols) => {
    // Function fetch random movie data and generate a collage
    try {
      // Number of data objects needed
      const numberOfItems = rows * cols;
      let url = `https://mediacharts-api.onrender.com/api/random/movies?items=${numberOfItems}`;
      if (process.env.REACT_APP_ENV === "development") {
        url = `/api/random/movies?items=${numberOfItems}`;
      }
      const response = await fetch(url);
      const movieData = await response.json();
      console.log(movieData);
      setRandomList(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomTvCollage = async (rows, cols) => {
    try {
      // Function that fetches random TV show data and creates a collage
      const numberOfItems = rows * cols;
      let url = `https://mediacharts-api.onrender.com/api/random/tv?items=${numberOfItems}`;
      if (process.env.REACT_APP_ENV === "development") {
        url = `/api/random/tv?items=${numberOfItems}`;
      }
      const response = await fetch(url);
      const tvData = await response.json();
      setRandomList(tvData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomGameCollage = async (rows, cols) => {
    try {
      // Function that fetches random videogame data and creates a collage
      // Number of objects needed
      const numberOfItems = rows * cols;
      let url = `https://mediacharts-api.onrender.com/api/random/games?items=${numberOfItems}`;
      if (process.env.REACT_APP_ENV === "development") {
        url = `/api/random/games?items=${numberOfItems}`;
      }
      const response = await fetch(url);
      const gameData = await response.json();
      setRandomList(gameData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CollageContext.Provider
      value={{
        getId,
        selectedId,
        displaySearch,
        numRows,
        numCols,
        setNumCols,
        setNumRows,
        color,
        firstGradientColor,
        secondGradientColor,
        fontColor,
        setColor,
        setFontColor,
        setFirstGradientColor,
        setSecondGradientColor,
        boxMargin,
        setBoxMargin,
        displayTitles,
        setDisplayTitles,
        fontFamily,
        setFontFamily,
        sort,
        setSort,
        randomList,
        generateRandomCollage,
        generateRandomAnimeCollage,
        generateRandomMovieCollage,
        generateRandomTvCollage,
        generateRandomGameCollage,
        shuffled,
        setShuffled,
        clear,
        setClear,
        closeSearch,
        searchMode,
        setSearchMode,
        boxType,
        setBoxType,
        backgroundMode,
        setBackgroundMode,
        borderRadius,
        setBorderRadius,
        gradientAngle,
        setGradientAngle,
      }}
    >
      {props.children}
    </CollageContext.Provider>
  );
};

export { CollageContextProvider, CollageContext };
