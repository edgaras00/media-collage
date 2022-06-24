import React, { useState } from "react";
// import {
//   fillMissingData,
//   getRandomYearOrGenre,
//   getRandomLetter,
//   fetchMusicData,
//   getRandomAnimeType,
//   getRandomAnimeGenre,
// } from "../utils";

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
    const response = await fetch(
      `http://localhost:5000/api/random/music?items=${numItems}`
    );
    const musicData = await response.json();
    setRandomList(musicData);

    // const API = process.env.REACT_APP_MUSIC_API;

    // Pick a random letter or year/genre to search artwork by
    // const randomLetter = getRandomLetter();
    // const randomGenreOrYear = getRandomYearOrGenre();
    // Number of  boxes to fill
    // const numItems = rows * cols;

    // Randomly decide which random query to run (50 50 chance)
    // const queryChoice = Math.random();

    // try {
    //   if (queryChoice < 0.5) {
    //     const albumData = await fetchMusicData(
    //       randomLetter,
    //       API,
    //       numItems,
    //       true
    //     );
    //     setRandomList(albumData);
    //     return;
    //   }
    //   const albumData = await fetchMusicData(
    //     randomGenreOrYear,
    //     API,
    //     numItems,
    //     false
    //   );
    //   setRandomList(albumData);
    //   return;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const generateRandomAnimeCollage = async () => {
    // Function to fetch random anime data

    try {
      const response = await fetch(`http://localhost:5000/api/random/anime`);
      const animeData = await response.json();
      setRandomList(animeData);
      // Array of pages for the random API call
      // const animePage = [1, 2, 3, 4, 5];
      // // Select a random page from the array of pages
      // const randomPage =
      //   animePage[Math.floor(Math.random() * animePage.length)];

      // const animeType = getRandomAnimeType();
      // const animeGenre = getRandomAnimeGenre();

      // // Anime query by anime type | Returns top movies/shows
      // const typeAnimeQuery = `https://api.jikan.moe/v3/top/anime/${randomPage}/${animeType}`;
      // // Anime query by genre | Returns by genres
      // const genreAnimeQuery = `https://api.jikan.moe/v3/genre/anime/${animeGenre}`;
      // // Randomly choose which query to use
      // const randomChoice = Math.random();

      // // Which API query
      // let queryUrl = typeAnimeQuery;
      // if (randomChoice < 0.5) {
      //   queryUrl = genreAnimeQuery;
      // }

      // const response = await fetch(queryUrl);
      // const data = await response.json();

      // const animeData = randomChoice >= 0.5 ? data.top : data.anime;
      // const animeObjects = animeData.map((item) => {
      //   return {
      //     image: item.image_url,
      //     data: item.title,
      //   };
      // });
      // setRandomList(animeObjects);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomMovieCollage = async (rows, cols) => {
    // Function fetch random movie data and generate a collage
    try {
      // Number of data objects needed
      const numberOfItems = rows * cols;
      console.log(numberOfItems);
      const response = await fetch(
        `http://localhost:5000/api/random/movies?items=${numberOfItems}`
      );
      const movieData = await response.json();
      console.log(movieData);
      setRandomList(movieData);
      // const API = process.env.REACT_APP_MOVIE_API;
      // // Array of pages (API pagination)
      // const moviePages = [1, 2, 3];
      // // Create an array of movies released from 1990 - 2020
      // const releaseYears = Array.from(new Array(33), (x, i) => i + 1990);
      // // Select a random page, year and build the API query
      // const randomPage =
      //   moviePages[Math.floor(Math.random() * moviePages.length)];
      // const randomYear =
      //   releaseYears[Math.floor(Math.random() * releaseYears.length)];
      // const movieQuery =
      //   `https://api.themoviedb.org/3/discover/movie?` +
      //   `api_key=${API}&language=en-US&sort_by=popularity.desc` +
      //   `&include_adult=false&include_video=false&page=${randomPage}` +
      //   `&primary_release_year=${randomYear}`;
      // // Fetch the movie data
      // const response = await fetch(movieQuery);
      // const data = await response.json();
      // let movieData = data.results.map((item) => {
      //   return {
      //     image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      //     data: item.title,
      //   };
      // });
      // if (numberOfItems > movieData.length) {
      //   movieData = fillMissingData(movieData, numberOfItems);
      // }
      // setRandomList(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomTvCollage = async (rows, cols) => {
    try {
      // Function that fetches random TV show data and creates a collage
      const numberOfItems = rows * cols;
      const response = await fetch(
        `http://localhost:5000/api/random/tv?q=${numberOfItems}`
      );
      const tvData = await response.json();
      setRandomList(tvData);
      // const API = process.env.REACT_APP_MOVIE_API;
      // // An array of some genre ids
      // const tvGenreIds = [16, 35, 80, 18, 9648, 53];
      // // Pick a random genre id and build API query
      // const randomGenreId =
      //   tvGenreIds[Math.floor(Math.random() * tvGenreIds.length)];
      // const tvQuery =
      //   `https://api.themoviedb.org/3/discover/tv?api_key=${API}` +
      //   `&language=en-US&sort_by=popularity.desc&page=1` +
      //   `&timezone=America%2FNew_York&with_genres=${randomGenreId}` +
      //   `&include_null_first_air_dates=false`;
      // // Fetch the TV show data

      // const response = await fetch(tvQuery);
      // const data = await response.json();
      // let tvData = data.results.map((item) => {
      //   return {
      //     image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      //     data: item.name,
      //   };
      // });
      // // If there are empty boxes / cells
      // // Fill with duplicate data
      // if (numberOfItems > tvData.length) {
      //   tvData = fillMissingData(tvData, numberOfItems);
      // }
      // setRandomList(tvData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomGameCollage = async (rows, cols) => {
    try {
      // Function that fetches random videogame data and creates a collage
      // Number of objects needed
      const numberOfItems = rows * cols;
      const response = await fetch(
        `http://localhost:5000/api/random/games?items=${numberOfItems}`
      );
      const gameData = await response.json();
      setRandomList(gameData);
      // // Array of pages (API pagination)
      // const pages = [1, 2, 3, 4];
      // // Choose a random page and build a query
      // const randomPage = pages[Math.floor(Math.random() * pages.length)];
      // const API = process.env.REACT_APP_GAME_API;
      // const gameQuery = `https://api.rawg.io/api/games?page=${randomPage}&key=${API}`;
      // // Fetch the game data
      // fetch(gameQuery)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     let gameData = data.results.map((item) => {
      //       return {
      //         image: item.background_image,
      //         data: item.name,
      //       };
      //     });
      //     // Fill up with duplicate data if there are empty boxes
      //     if (numberOfItems > gameData.length) {
      //       gameData = fillMissingData(gameData, numberOfItems);
      //     }
      //     setRandomList(gameData);
      //   });
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
