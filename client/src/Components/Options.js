import React, { useContext, useState } from "react";
import { CollageContext } from "../Context/CollageContext";
import "../styles/options.css";

const Options = () => {
  // Functional Options component
  // Allows for collage/grid customization

  // React Context for the customization options
  const {
    numRows,
    numCols,
    setNumRows,
    setNumCols,
    color,
    firstGradientColor,
    secondGradientColor,
    setFirstGradientColor,
    setSecondGradientColor,
    fontColor,
    setColor,
    setFontColor,
    boxMargin,
    setBoxMargin,
    setDisplayTitles,
    displayTitle,
    fontFamily,
    setFontFamily,
    sort,
    setSort,
    generateRandomCollage,
    generateRandomAnimeCollage,
    generateRandomMovieCollage,
    generateRandomTvCollage,
    generateRandomGameCollage,
    setShuffled,
    setClear,
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
  } = useContext(CollageContext);

  // Generate random collage based on the selected mode
  let generateRandom;
  switch (searchMode) {
    case "music":
      generateRandom = generateRandomCollage;
      break;
    case "movies":
      generateRandom = generateRandomMovieCollage;
      break;
    case "anime":
      generateRandom = generateRandomAnimeCollage;
      break;
    case "tv":
      generateRandom = generateRandomTvCollage;
      break;
    case "videogames":
      generateRandom = generateRandomGameCollage;
      break;
    default:
      break;
  }

  return (
    <div className="options-container">
      <div className="options">
        {/* Number of rows slider */}
        <div className="option">
          <label>
            Rows:
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              name="numRows"
              value={numRows}
              onChange={(event) => setNumRows(event.target.value * 1)}
            />{" "}
            {numRows}
          </label>
        </div>
        {/* Number of columns slider */}
        <div className="option">
          <label>
            Columns:
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={numCols}
              onChange={(event) => setNumCols(event.target.value * 1)}
            />
            {numCols}
          </label>
        </div>
        {/* Margin slider (number of pixels) */}
        <div className="option">
          <label>
            Margin (pixels):
            <input
              className="option-input"
              type="range"
              name="boxMargin"
              min="0"
              max="15"
              step="1"
              value={boxMargin}
              onChange={(event) => setBoxMargin(Number(event.target.value))}
            />
            {boxMargin}
          </label>
        </div>
        {/* Border radius slider */}
        <div className="option">
          <label>
            Border Radius:
            <input
              className="option-input"
              type="range"
              name="borderRadius"
              min="0"
              max="50"
              step="1"
              value={borderRadius}
              onChange={(event) => setBorderRadius(event.target.value * 1)}
            />
          </label>
        </div>
        {/* Radio button to select grid cell's shape (square) */}
        <div className="related-option">
          <label>
            <input
              type="radio"
              name="boxType"
              value="square"
              checked={boxType === "square"}
              onChange={(event) => setBoxType(event.target.value)}
            />
            Square
          </label>
        </div>
        {/* Radio button for grid cell's shape (rectangle) */}
        <div className="option">
          <label>
            <input
              type="radio"
              name="boxType"
              value="rectangle"
              checked={boxType === "rectangle"}
              onChange={(event) => setBoxType(event.target.value)}
            />
            Rectangle
          </label>
        </div>
        {/* Select input for search mode. What kind of media to look for. */}
        <div className="option">
          <select
            name="searchMode"
            onChange={(event) => setSearchMode(event.target.value)}
            className="option"
          >
            <option value="music">Music</option>
            <option value="movies">Movies</option>
            <option value="tv">TV Shows</option>
            <option value="anime">Anime</option>
            <option value="videogames">Video Games</option>
          </select>
        </div>
        {/* Radio button for regular background color */}
        <div className="related-option">
          <label>
            <input
              type="radio"
              name="backgroundMode"
              value="regular"
              checked={backgroundMode === "regular"}
              onChange={(event) => setBackgroundMode(event.target.value)}
            />
            Regular
          </label>
        </div>
        {/* Radio button for gradient background color */}
        <div className="option">
          <label className="option">
            <input
              type="radio"
              name="backgroundMode"
              value="gradient"
              checked={backgroundMode === "gradient"}
              onChange={(event) => setBackgroundMode(event.target.value)}
            />
            Gradient
          </label>
        </div>
        {/* Color options based on selected color mode */}
        <div className="option">
          {backgroundMode === "regular" ? (
            <label>
              <span>Background Color: </span>
              <input
                className="option-input"
                type="text"
                name="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </label>
          ) : (
            <div>
              <div className="related-option">
                <label>
                  <span>Linear Gradient: </span>
                  <div>
                    <input
                      className="gradient-color"
                      type="text"
                      name="colorOne"
                      value={firstGradientColor}
                      onChange={(event) =>
                        setFirstGradientColor(event.target.value)
                      }
                    />
                    <input
                      type="text"
                      name="colorTwo"
                      value={secondGradientColor}
                      onChange={(event) =>
                        setSecondGradientColor(event.target.value)
                      }
                    />
                  </div>
                </label>
              </div>
              <label>
                Angle:
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={gradientAngle}
                  onChange={(event) => setGradientAngle(event.target.value * 1)}
                />
              </label>
            </div>
          )}
        </div>
        {/* Select font family*/}
        <div className="option">
          <label>
            <span>Font: </span>
            <select
              value={fontFamily}
              onChange={(event) => setFontFamily(event.target.value)}
            >
              <option value="Courier">Courier</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Verdana">Verdana</option>
              <option value="Roboto">Roboto</option>
            </select>
          </label>
        </div>
        {/* Select font color */}
        <div className="option">
          <label>
            <span>Font Color: </span>
            <input
              className="option-input"
              type="text"
              name="fontColor"
              value={fontColor}
              onChange={(event) => setFontColor(event.target.value)}
            />
          </label>
        </div>
        {/* Radio button for drag and sort option */}
        {/* Pushes neighboring cells to the side */}
        <div className="related-option">
          <label>
            <input
              type="radio"
              name="sort"
              value={sort}
              checked={sort}
              onChange={() => setSort(true)}
            />
            Drag and Sort
          </label>
        </div>
        {/* Radio button for drag and swap option */}
        {/* Swaps grid cell positions */}
        <div className="option">
          <label>
            <input
              type="radio"
              name="sort"
              value={sort}
              checked={!sort}
              onChange={() => setSort(false)}
            />
            Drag and Swap
          </label>
        </div>
        {/* Checkbox to show or hide titles */}
        <div className="option">
          <label>
            <input
              type="checkbox"
              name="displayTitle"
              value={displayTitle}
              checked={displayTitle}
              onChange={() => setDisplayTitles((prev) => !prev)}
            />
            Show Titles
          </label>
        </div>
        <div className="button-wrapper">
          {/* Button that generates a random media collage */}
          <button
            onClick={() => generateRandom(numRows, numCols)}
            className="menu-button"
          >
            Generate Random
          </button>
          {/* Button that shuffles the images */}
          <button
            onClick={() => setShuffled((prev) => prev + 1)}
            className="menu-button"
          >
            Shuffle Images
          </button>
          {/* Button that clears the collage */}
          <button
            onClick={() => setClear((prev) => !prev)}
            className="menu-button"
          >
            Clear Collage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
