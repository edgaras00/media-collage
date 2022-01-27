import React from "react";

const TitlesContainer = ({
  titles,
  numRows,
  numCols,
  fontFamily,
  fontColor,
  width,
}) => {
  // Functional component that holds the media titles

  // Separate the titles into separate groups based on rows / columns
  // Each title group will be separated by a space
  const subArrays = [];
  let start = 0;
  let end = numCols;
  for (let i = 0; i < numRows; i++) {
    subArrays.push([...titles.slice(start, end), <br />]);
    start += numCols;
    end += numCols;
  }
  // Create list <li> elements
  const titleArray = subArrays.flat();
  const listItems = titleArray.map((title, index) => {
    if (title !== <br />) {
      title = <li key={index}>{title}</li>;
    }
    return title;
  });

  return (
    <ul
      style={{
        listStyle: "none",
        fontFamily,
        color: fontColor,
        width: "100%",
        overflow: "auto",
        // reduce font size with increasing width
        fontSize: `${800 / width}em`,
        whiteSpace: "nowrap",
        padding: "0 4%",
      }}
    >
      {listItems}
    </ul>
  );
};

export default TitlesContainer;
