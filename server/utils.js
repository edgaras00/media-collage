const fetch = require("node-fetch");

exports.getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
};

exports.getRandomYearOrGenre = () => {
  const genresAndYears = [
    "pop",
    "rap",
    "rock",
    "disco",
    "electronic",
    "80s",
    "90s",
    "2000s",
    "2008",
    "2009",
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
    "2020",
    "2021",
    "2022",
  ];
  const randomGenreOrYear =
    genresAndYears[Math.floor(Math.random() * genresAndYears.length)];
  return randomGenreOrYear;
};

exports.fillMissingData = (array, numberOfItems) => {
  // Function that is used to fill up empty boxes with duplicate data
  // It loops while there are still empty boxes
  while (array.length < numberOfItems && array.length > 0) {
    const difference = numberOfItems - array.length;
    // If the difference is higher than 20
    // Duplicate the whole array
    if (difference > 20) {
      array.push(...array);
      // Just add the difference if difference < 20
    } else {
      array.push(...array.slice(0, difference));
    }
  }
  return array;
};

exports.getRandomAnimeType = () => {
  const animeType = ["movie", "tv"];
  const randomType = animeType[Math.floor(Math.random() * animeType.length)];
  return randomType;
};

exports.getRandomAnimeGenre = () => {
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
  const randomGenreId = genreIds[Math.floor(Math.random() * genreIds.length)];
  return randomGenreId;
};

exports.fetchMusicData = async (query, API, numItems, byAlbum) => {
  const albumLetterQuery =
    `http://ws.audioscrobbler.com/2.0/?method=album.search` +
    `&album=${query}&api_key=${API}&format=json&limit=${numItems}`;

  const genreYearQuery =
    `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums` +
    `&tag=${query}&api_key=${API}&format=json&limit=${numItems}`;

  const response = await fetch(byAlbum ? albumLetterQuery : genreYearQuery);
  const data = await response.json();
  const albumData = byAlbum
    ? data.results.albummatches.album
    : data.albums.album;

  const albumObjects = albumData.map((item) => ({
    image: item.image[2]["#text"],
    data: `${byAlbum ? item.artist : item.artist.name} - ${item.name}`,
  }));
  return albumObjects;
};
