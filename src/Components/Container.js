import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import update from "immutability-helper";
import Box from "./Box";
import { CollageContext } from "../Context/CollageContext";
import SearchMedia from "./SearchMedia";
import TitlesContainer from "./TitlesContainer";
// import { resizeMatrix, shuffle } from "../utils";
import { resizeMatrix, createBoxes, shuffle } from "../utils";
import "../styles/container.css";

const Container = () => {
  // Functional Container component

  const {
    // selectedId,
    getId,
    // selectedImage,
    numRows,
    numCols,
    color,
    colorOne,
    colorTwo,
    fontColor,
    margin,
    displayTitles,
    font,
    sort,
    randomList,
    shuffled,
    clear,
    searchByAlbum,
    searchMode,
    backgroundMode,
    boxType,
    borderRadius,
    gradientAngle,
  } = useContext(CollageContext);

  const [boxes, setBoxes] = useState(createBoxes(numRows, numCols));

  // An array of media titles (strings)
  const [titles, setTitles] = useState([]);
  //
  const [width, setWidth] = useState(null);
  const widthRef = useRef(null);

  const moveBox = useCallback(
    (dragIndex, hoverIndex) => {
      /* 
        Uses useCallback hook so that the function is not recreated every
        time the component renders 
        Only when the 'boxes' and 'sort' values change 
      */

      // Selected box that is being dragged
      const dragBox = boxes[dragIndex];
      // Position / index of the box that is being hovered on
      const hoveredBox = boxes[hoverIndex];
      if (sort) {
        // Push the neighboring boxes to the side if "sort" is selected
        setBoxes((prev) =>
          update(prev, {
            // Remove from dragIndex and add to hoverIndex without removing box
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragBox],
            ],
          })
        );
      } else {
        // Swap the drag box with drop box if "swap" is selected

        setBoxes((prev) =>
          update(prev, {
            $splice: [
              [dragIndex, 1, hoveredBox],
              [hoverIndex, 1, dragBox],
            ],
          })
        );
      }
    },
    [boxes, sort]
  );

  // Make sure it doesn't run on the first render
  const initialRenderRef = useRef(true);
  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
    } else {
      // Resize the grid by adding / removing boxes based on # rows/columns
      setBoxes((prevBox) => resizeMatrix(numRows, numCols, prevBox));
    }
  }, [numRows, numCols]);

  useEffect(() => {
    // Generate a random collage from the values in the randomList
    // randomList array is populated with media objects when user
    // chooses to generate a random collage
    setBoxes((prevBox) => {
      //  Get the artwork image
      const images = randomList.map((item) => item.image);
      //  Get the media data
      const data = randomList.map((item) => item.data);
      const randomCollage = prevBox.map((item, index) => {
        return {
          ...item,
          image: images[index],
          data: data[index],
        };
      });
      return randomCollage;
    });
  }, [randomList, searchByAlbum]);

  useEffect(() => {
    // Populate the title state array with media titles
    let albumData = boxes.map((item) => item.data);
    setTitles(albumData);
  }, [boxes]);

  const initialRender = useRef(true);
  useEffect(() => {
    // Don't shuffle on initial render
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setBoxes((prevBox) => shuffle(prevBox));
    }
  }, [shuffled]);

  useEffect(() => {
    // Clear collage is user chooses the "Clear Collage" option
    setBoxes((prevBox) => {
      const newArr = prevBox.map((item) => {
        return {
          ...item,
          image: "",
          data: "",
        };
      });
      return newArr;
    });
  }, [clear]);

  useEffect(() => {
    // Check the grid width based on the number of columns
    // Necessary to choose a proper font size for media titles
    if (displayTitles) {
      setWidth(widthRef.current.getBoundingClientRect().width);
    }
  }, [numCols, displayTitles]);

  // Create collage box components
  const boxComponents = boxes.map((box, index) => {
    return (
      <Box
        index={index}
        key={box.id}
        id={box.id}
        text={box.text}
        image={box.image}
        moveBox={moveBox}
        handleClick={getId}
        margin={margin}
        numCols={numCols}
        boxType={boxType}
        borderRadius={borderRadius}
      />
    );
  });

  // Create a matrix of box components
  // Nested array
  const matrix = [];
  let start = 0;
  // Number of columns in the matrix
  let end = numCols;
  for (let i = 0; i < numRows; i++) {
    matrix.push(boxComponents.slice(start, end));
    start += numCols;
    end += numCols;
  }

  // Create a table body from the matrix
  const body = matrix.map((row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {row.map((column, colIndex) => {
          const cell = <td key={colIndex}>{column}</td>;
          return cell;
        })}
      </tr>
    );
  });

  // Choose background style: regular or linear gradient
  const backgroundStyle =
    backgroundMode === "regular"
      ? { backgroundColor: color }
      : {
          background: `linear-gradient(${gradientAngle}deg, ${colorOne}, ${colorTwo})`,
        };

  return (
    <div className="container-container">
      {/* {displaySearch? <SearchAlbum /> : null} */}
      <SearchMedia setBoxes={setBoxes} />
      <div className="collage">
        <table ref={widthRef} style={backgroundStyle}>
          <tbody>{body}</tbody>
          <tfoot>
            <tr>
              <td>
                {displayTitles ? (
                  <TitlesContainer
                    titles={titles}
                    numCols={numCols}
                    numRows={numRows}
                    font={font}
                    fontColor={fontColor}
                    width={width}
                    searchMode={searchMode}
                  />
                ) : null}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Container;
