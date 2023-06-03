const fetch = require("node-fetch");
const utils = require("../../utils");

const MUSIC_API = process.env.MUSIC_API;
const MOVIE_API = process.env.MOVIE_API;
const GAME_API = process.env.GAME_API;

exports.getMusicData = async (req, res) => {
  try {
    const musicQuery = req.query.query;
    const APIQuery =
      `http://ws.audioscrobbler.com/2.0/?method=album.search&` +
      `album=${musicQuery}` +
      `&api_key=${MUSIC_API}&format=json&limit=20`;
    const response = await fetch(APIQuery);
    if (!response.ok) {
      throw new Error("404: Media not found");
    }
    const musicData = await response.json();
    res.status(200).json(musicData.results.albummatches.album);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getMovieData = async (req, res) => {
  try {
    const movieQuery = req.query.query;
    const APIQuery =
      `https://api.themoviedb.org/3/search/movie?` +
      `api_key=${MOVIE_API}&language=en-US&query=${movieQuery}` +
      `&page=1&include_adult=false`;
    const response = await fetch(APIQuery);
    if (!response.ok) {
      throw new Error("404: Media not found");
    }
    const movieData = await response.json();
    res.status(200).json(movieData.results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getTVData = async (req, res) => {
  try {
    const tvQuery = req.query.query;
    const APIQuery =
      `https://api.themoviedb.org/3/search/tv?api_key=${MOVIE_API}` +
      `&language=en-US&page=1&query=${tvQuery}` +
      `&include_adult=false`;
    const response = await fetch(APIQuery);
    if (!response.ok) {
      throw new Error("404: Media not found");
    }
    const tvData = await response.json();
    res.status(200).json(tvData.results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getAnimeData = async (req, res) => {
  try {
    const animeQuery = req.query.query;
    const APIQuery =
      `https://api.jikan.moe/v3/search/anime?` + `q=${animeQuery}&limit=20`;
    const response = await fetch(APIQuery);
    if (!response.ok) {
      throw new Error("404: Media not found");
    }
    const animeData = await response.json();
    res.status(200).json(animeData.results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getVideoGameData = async (req, res) => {
  try {
    const videoGameQuery = req.query.query;
    const APIQuery = `https://api.rawg.io/api/games?search=${videoGameQuery}&key=${GAME_API}`;
    const response = await fetch(APIQuery);
    if (!response.ok) {
      throw new Error("404: Media not found");
    }
    const videoGameData = await response.json();
    res.status(200).json(videoGameData.results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getRandomMusicData = async (req, res) => {
  try {
    const numberOfItems = req.query.items;
    const randomLetter = utils.getRandomLetter();
    const randomGenreOrYear = utils.getRandomYearOrGenre();

    const queryChoice = Math.random();

    if (queryChoice < 0.5) {
      const albumData = await utils.fetchMusicData(
        randomLetter,
        MUSIC_API,
        numberOfItems,
        true
      );
      res.status(200).json(albumData);
    } else {
      const albumData = await utils.fetchMusicData(
        randomGenreOrYear,
        MUSIC_API,
        numberOfItems,
        false
      );
      res.status(200).json(albumData);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.getRandomMovieData = async (req, res) => {
  try {
    const numberOfItems = req.query.items;
    const moviePages = [1, 2, 3];
    const releaseYears = Array.from(new Array(33), (x, i) => i + 1990);
    const randomPage =
      moviePages[Math.floor(Math.random() * moviePages.length)];
    const randomYear =
      releaseYears[Math.floor(Math.random() * releaseYears.length)];

    const movieQuery =
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=${MOVIE_API}&language=en-US&sort_by=popularity.desc` +
      `&include_adult=false&include_video=false&page=${randomPage}` +
      `&primary_release_year=${randomYear}`;

    const response = await fetch(movieQuery);
    const data = await response.json();
    let movieData = data.results.map((item) => {
      return {
        image: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
        data: item.title,
      };
    });
    if (numberOfItems > movieData.length) {
      movieData = utils.fillMissingData(movieData, numberOfItems);
    }
    res.status(200).json(movieData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.getRandomTVData = async (req, res) => {
  try {
    const numberOfItems = req.query.items;
    const tvGenreIds = [16, 35, 80, 18, 9648, 53];
    const randomGenreId =
      tvGenreIds[Math.floor(Math.random() * tvGenreIds.length)];
    const tvQuery =
      `https://api.themoviedb.org/3/discover/tv?api_key=${MOVIE_API}` +
      `&language=en-US&sort_by=popularity.desc&page=1` +
      `&timezone=America%2FNew_York&with_genres=${randomGenreId}` +
      `&include_null_first_air_dates=false`;
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
      tvData = utils.fillMissingData(tvData, numberOfItems);
    }
    res.status(200).json(tvData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.getRandomAnimeData = async (req, res) => {
  try {
    // Array of pages for the random API call
    const animePage = [1, 2, 3, 4, 5];
    // Select a random page from the array of pages
    const randomPage = animePage[Math.floor(Math.random() * animePage.length)];

    const animeType = utils.getRandomAnimeType();
    const animeGenre = utils.getRandomAnimeGenre();

    // Anime query by anime type | Returns top movies/shows
    const typeAnimeQuery = `https://api.jikan.moe/v3/top/anime/${randomPage}/${animeType}`;
    // Anime query by genre | Returns by genres
    const genreAnimeQuery = `https://api.jikan.moe/v3/genre/anime/${animeGenre}`;
    // Randomly choose which query to use
    const randomChoice = Math.random();

    // Which API query
    let queryUrl = typeAnimeQuery;
    if (randomChoice < 0.5) {
      queryUrl = genreAnimeQuery;
    }

    const response = await fetch(queryUrl);
    const data = await response.json();

    const animeData = randomChoice >= 0.5 ? data.top : data.anime;
    const animeObjects = animeData.map((item) => {
      return {
        image: item.image_url,
        data: item.title,
      };
    });
    res.status(200).json(animeObjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getRandomVideoGameData = async (req, res) => {
  try {
    const numberOfItems = req.query.items;
    // Array of pages (API pagination)
    const pages = [1, 2, 3, 4];
    // Choose a random page and build a query
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    const gameQuery = `https://api.rawg.io/api/games?page=${randomPage}&key=${GAME_API}`;

    const response = await fetch(gameQuery);
    const gameData = await response.json();
    let gameDataObjects = gameData.results.map((item) => {
      return {
        image: item.background_image,
        data: item.name,
      };
    });
    // Fill up with duplicate data if there are empty boxes
    if (numberOfItems > gameDataObjects.length) {
      gameDataObjects = fillMissingData(gameDataObjects, numberOfItems);
    }
    res.status(200).json(gameDataObjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
