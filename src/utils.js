import React from "react";

function createBoxes(rows, cols) {
  // Function that creates box objects
  const items = rows * cols;
  const itemArray = [];
  for (let i = 0; i < items; i++) {
    itemArray.push({ id: i, text: i + 1, image: "", data: "" });
  }
  return itemArray;
}

function resizeMatrix(rows, cols, boxes) {
  // Id of the last box in the collage / grid
  const lastId = boxes.length - 1;
  // Number of boxes in the collage / grid
  const numberOfItems = rows * cols;
  if (numberOfItems > boxes.length) {
    // If (rows * columns) > boxes array length
    // Add new box objects
    const newItems = [];
    for (let i = lastId + 1; i < numberOfItems; i++) {
      newItems.push({ id: i, text: i + 1, image: "", data: "" });
    }
    const modifiedData = [...boxes, ...newItems];
    return modifiedData;
  }
  if (numberOfItems < boxes.length) {
    // If (rows * columns) < boxes array length
    // Remove extra box objects
    return boxes.slice(0, numberOfItems);
  }
}

function shuffle(array) {
  // Function that is used to shuffle the collage
  const shuffledArr = [].concat(array);
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = shuffledArr[i];
    shuffledArr[i] = shuffledArr[j];
    shuffledArr[j] = x;
  }
  return shuffledArr;
}

function replaceSpaces(string) {
  // Function that replaces spaces in search queries with "+"
  // Can't have space characters in API queries
  return string.split(" ").join("+");
}

function fillMissingData(array, numberOfItems) {
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
  console.log("end looping");
  return array;
}

const createMatrix = (data, numRows, numCols) => {
  const matrix = [];
  let start = 0;
  // Number of columns in the matrix
  let end = numCols;
  for (let i = 0; i < numRows; i++) {
    matrix.push(data.slice(start, end));
    start += numCols;
    end += numCols;
  }
  return matrix;
};

const createMatrixTable = (data, numRows, numCols) => {
  const matrix = createMatrix(data, numRows, numCols);
  const body = matrix.map((row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map((column, colIndex) => {
          return <td key={colIndex}>{column}</td>;
        })}
      </tr>
    );
  });
  return body;
};

const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
};

const getRandomYearOrGenre = () => {
  const genresAndYears = [
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
    "2020",
    "2021",
    "2022",
  ];
  const randomGenreOrYear =
    genresAndYears[Math.floor(Math.random() * genresAndYears.length)];
  return randomGenreOrYear;
};

const fetchMusicData = async (query, API, numItems, byAlbum) => {
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
  console.log(byAlbum);
  console.log(albumData);
  const albumObjects = albumData.map((item) => ({
    image: item.image[2]["#text"],
    data: `${byAlbum ? item.artist : item.artist.name} - ${item.name}`,
  }));
  return albumObjects;
};

const getRandomAnimeType = () => {
  const animeType = ["movie", "tv"];
  const randomType = animeType[Math.floor(Math.random() * animeType.length)];
  return randomType;
};

const getRandomAnimeGenre = () => {
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

export {
  createBoxes,
  resizeMatrix,
  shuffle,
  replaceSpaces,
  fillMissingData,
  createMatrix,
  createMatrixTable,
  getRandomLetter,
  getRandomYearOrGenre,
  fetchMusicData,
  getRandomAnimeGenre,
  getRandomAnimeType,
};
