import React, { useState } from "react";
import { fillMissingData } from "../utils";

// React Context that holds the app states that are accessible to multiple
// components in the app

const CollageContext = React.createContext();

const CollageContextProvider = (props) => {
  // Options context
  // State for the number of rows in the grid
  const [numRows, setNumRows] = useState(3);
  // State for the number of columns in the grid
  const [numCols, setNumCols] = useState(3);
  // Display titles (true/false)
  const [displayTitles, setDisplayTitles] = useState(false);
  // State for collage's background color
  const [color, setColor] = useState("#000");
  // State for the title font color
  const [fontColor, setFontColor] = useState("#fff");
  // State for color one of the color gradient
  const [colorOne, setColorOne] = useState("#20BF55");
  // State for color two of the color gradient
  const [colorTwo, setColorTwo] = useState("#01BAEF");
  // Set a box margin in pixels
  const [margin, setMargin] = useState(1);
  // Set a font for displayed titles
  const [font, setFont] = useState("Courier");
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
  // State that holds the selected artwork image information
  // Artwork image URL and the media title
  const [selectedImage, setSelectedImage] = useState({});
  // Display search modal (true/false)
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchByAlbum, setSearchByAlbum] = useState(true);

  // Options functions
  const changeRows = (value) => {
    // Function to change the number of rows
    setNumRows(Number(value));
  };

  const changeCols = (value) => {
    // Function to change the number of columns
    setNumCols(Number(value));
  };

  const changeBorderRadius = (value) => {
    // Function to change the border radius
    setBorderRadius(Number(value));
  };

  const changeGradientAngle = (value) => {
    // Function to change the gradient angle
    setGradientAngle(Number(value));
  };

  const changeBoxType = (value) => {
    // Function to change the box type
    setBoxType(value);
  };

  const changeColor = (value) => {
    // Function to change the background color
    setColor(value);
  };

  const changeColorOne = (value) => {
    // Function to change color one in the gradient background
    setColorOne(value);
  };

  const changeColorTwo = (value) => {
    // Function to change color two in the gradient background
    setColorTwo(value);
  };

  const changeFontColor = (value) => {
    // Function to change font color
    setFontColor(value);
  };

  const changeMargin = (value) => {
    // Function to change the box margin
    setMargin(Number(value));
  };

  const changeFont = (value) => {
    // Function to change the title font
    setFont(value);
  };

  const toggleSort = (value) => {
    // Function to sort
    setSort(value);
  };

  const changeSearchMode = (value) => {
    // Function to change the search mode
    setSearchMode(value);
  };

  const changeBackgroundMode = (value) => {
    // Function to change the background mode (regular or gradient)
    setBackgroundMode(value);
  };

  const toggleDisplayTitle = () => {
    // Function that shows or hides titles
    setDisplayTitles((prevState) => !prevState);
  };

  const toggleShuffle = () => {
    // Function that changes "shuffle" state
    // Shuffles the collage boxes and makes component to rerender
    // So that the shuffled images are shown
    setShuffled((prevState) => prevState + 1);
  };

  const toggleClear = () => {
    // Function that clears the grid
    setClear((prevState) => !prevState);
  };

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

  const selectImage = (image, artist, name) => {
    // Function that selects the artwork image from the search modal
    // results and creates an image object with image data
    let mediaName = `${artist} - ${name}`;
    if (searchMode !== "music") {
      mediaName = name;
    }
    setSelectedImage({ image: image, data: mediaName });
    setDisplaySearch(false);
  };

  const generateRandomCollage = async (rows, cols) => {
    // Function that generates a random collage
    const API = process.env.REACT_APP_MUSIC_API;

    try {
      // Random album tags (searches by first letter of the album name)
      const albumLetterTags = "abcdefghijklmnopqrstuvwxyz".split("");
      // Random album genre and year tags
      const genreYearTags = [
        "pop",
        "rap",
        "rock",
        "disco",
        "electronic",
        "80s",
        "90s",
        "2000s",
        "2010s",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2019",
      ];

      // Pick a random letter or year/genre
      const randomLetter =
        albumLetterTags[Math.floor(Math.random() * albumLetterTags.length)];
      const randomGenreYear =
        genreYearTags[Math.floor(Math.random() * genreYearTags.length)];
      // Number of  boxes to fill
      const numItems = rows * cols;

      // Query using random letter
      const albumLetterQuery =
        `http://ws.audioscrobbler.com/2.0/?method=album.search` +
        `&album=${randomLetter}&api_key=${API}&format=json&limit=${numItems}`;

      // Query using genre / year
      const genreYearQuery =
        `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums` +
        `&tag=${randomGenreYear}&api_key=${API}&format=json&limit=${numItems}`;

      // Randomly decide which random query to run (50 50 chance)
      const queryChoice = Math.random();

      if (queryChoice < 0.5) {
        // Fetch data by random letter
        setSearchByAlbum(true);
        const response = await fetch(albumLetterQuery);
        const data = await response.json();
        const albumData = data.results.albummatches.album.map((item) => {
          return {
            image: item.image[2]["#text"],
            data: `${item.artist} - ${item.name}`,
          };
        });
        setRandomList(albumData);
      } else {
        // Fetch data by genre / year
        setSearchByAlbum(false);
        const response = await fetch(genreYearQuery);
        const data = await response.json();
        const albumData = data.albums.album.map((item) => {
          return {
            image: item.image[2]["#text"],
            data: `${item.artist.name} - ${item.name}`,
          };
        });
        setRandomList(albumData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomAnimeCollage = async () => {
    // Function to fetch random anime data

    try {
      // Array of pages for the random API call
      const animePage = [1, 2, 3, 4, 5];
      // Select a random page from the array of pages
      const randomPage =
        animePage[Math.floor(Math.random() * animePage.length)];

      // Top anime query (movie or tv series)
      const animeType = ["movie", "tv"];
      // Genre anime query
      const genreIds = [
        1,
        2,
        3,
        4,
        6,
        7,
        10,
        11,
        14,
        16,
        17,
        18,
        19,
        20,
        21,
        23,
        27,
        29,
        30,
        31,
        32,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
      ];

      // Select a random type of anime (Movie or TV series)
      const randomType =
        animeType[Math.floor(Math.random() * animeType.length)];
      // Select a random genre by the API genre ids
      const randomGenreId =
        genreIds[Math.floor(Math.random() * genreIds.length)];

      // Anime query by anime type | Returns top movies/shows
      const typeAnimeQuery = `https://api.jikan.moe/v3/top/anime/${randomPage}/${randomType}`;
      // Anime query by genre | Returns by genres
      const genreAnimeQuery = `https://api.jikan.moe/v3/genre/anime/${randomGenreId}`;
      // Randomly choose which query to use
      const randomChoice = Math.random();

      // Which API query
      let queryUrl = typeAnimeQuery;
      if (randomChoice < 0.5) {
        queryUrl = genreAnimeQuery;
      }

      const response = await fetch(queryUrl);
      const data = await response.json();
      if (randomChoice >= 0.5) {
        const animeData = data.top.map((item) => {
          return {
            image: item.image_url,
            data: item.title,
          };
        });
        setRandomList(animeData);
      } else {
        const animeData = data.anime.map((item) => {
          return {
            image: item.image_url,
            data: item.title,
          };
        });
        setRandomList(animeData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomMovieCollage = async (rows, cols) => {
    // Function fetch random movie data and generate a collage
    try {
      // Number of data objects needed
      const numberOfItems = rows * cols;
      const API = process.env.REACT_APP_MOVIE_API;
      // Array of pages (API pagination)
      const moviePages = [1, 2, 3];
      // Create an array of movies released from 1990 - 2020
      const releaseYears = Array.from(new Array(31), (x, i) => i + 1990);
      // Select a random page, year and build the API query
      const randomPage =
        moviePages[Math.floor(Math.random() * moviePages.length)];
      const randomYear =
        releaseYears[Math.floor(Math.random() * releaseYears.length)];
      const movieQuery =
        `https://api.themoviedb.org/3/discover/movie?` +
        `api_key=${API}&language=en-US&sort_by=popularity.desc` +
        `&include_adult=false&include_video=false&page=${randomPage}` +
        `&primary_release_year=${randomYear}`;
      // Fetch the movie data
      const response = await fetch(movieQuery);
      const data = await response.json();
      let movieData = data.results.map((item) => {
        return {
          image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          data: item.title,
        };
      });
      if (numberOfItems > movieData.length) {
        movieData = fillMissingData(movieData, numberOfItems);
      }
      setRandomList(movieData);
    } catch (error) {
      console.log(error);
    }
  };

  const generateRandomTvCollage = async (rows, cols) => {
    try {
      // Function that fetches random TV show data and creates a collage
      const numberOfItems = rows * cols;
      const API = process.env.REACT_APP_MOVIE_API;
      // An array of some genre ids
      const tvGenreIds = [16, 35, 80, 18, 9648, 53];
      // Pick a random genre id and build API query
      const randomGenreId =
        tvGenreIds[Math.floor(Math.random() * tvGenreIds.length)];
      const tvQuery =
        `https://api.themoviedb.org/3/discover/tv?api_key=${API}` +
        `&language=en-US&sort_by=popularity.desc&page=1` +
        `&timezone=America%2FNew_York&with_genres=${randomGenreId}` +
        `&include_null_first_air_dates=false`;
      // Fetch the TV show data

      const response = await fetch(tvQuery);
      const data = await response.json();
      let tvData = data.results.map((item) => {
        return {
          image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          data: item.name,
        };
      });
      // If there are empty boxes / cells
      // Fill with duplicate data
      if (numberOfItems > tvData.length) {
        tvData = fillMissingData(tvData, numberOfItems);
      }
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
      // Array of pages (API pagination)
      const pages = [1, 2, 3, 4];
      // Choose a random page and build a query
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      const API = process.env.REACT_APP_GAME_API;
      const gameQuery = `https://api.rawg.io/api/games?page=${randomPage}&key=${API}`;
      // Fetch the game data
      fetch(gameQuery)
        .then((response) => response.json())
        .then((data) => {
          let gameData = data.results.map((item) => {
            return {
              image: item.background_image,
              data: item.name,
            };
          });
          // Fill up with duplicate data if there are empty boxes
          if (numberOfItems > gameData.length) {
            gameData = fillMissingData(gameData, numberOfItems);
          }
          setRandomList(gameData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CollageContext.Provider
      value={{
        selectImage,
        selectedImage,
        getId,
        selectedId,
        displaySearch,
        numRows,
        numCols,
        changeCols,
        changeRows,
        color,
        colorOne,
        colorTwo,
        fontColor,
        changeColor,
        changeFontColor,
        changeColorOne,
        changeColorTwo,
        margin,
        changeMargin,
        // albumData,
        // setAlbumData,
        displayTitles,
        toggleDisplayTitle,
        font,
        changeFont,
        sort,
        toggleSort,
        randomList,
        generateRandomCollage,
        generateRandomAnimeCollage,
        generateRandomMovieCollage,
        generateRandomTvCollage,
        generateRandomGameCollage,
        shuffled,
        toggleShuffle,
        clear,
        toggleClear,
        searchByAlbum,
        closeSearch,
        searchMode,
        changeSearchMode,
        boxType,
        changeBoxType,
        backgroundMode,
        changeBackgroundMode,
        borderRadius,
        changeBorderRadius,
        gradientAngle,
        changeGradientAngle,
      }}
    >
      {props.children}
    </CollageContext.Provider>
  );
};

export { CollageContextProvider, CollageContext };
