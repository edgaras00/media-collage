import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";

import useWindowWidth from "../Hooks/useWindowWidth";

import "../styles/box.css";

const Box = ({
  id,
  index,
  moveBox,
  image,
  boxMargin,
  handleClick,
  numCols,
  boxType,
  borderRadius,
}) => {
  const ref = useRef(null);
  const { width } = useWindowWidth();

  const [, drop] = useDrop({
    /* 
      The useDrop hook provides a way to wire in the component into the DnD 
      system as a drop target 
    */
    // The "type" to accept as a droppable object
    accept: ItemTypes.BOX,
    drop(item) {
      // Function that is called when a compatible item is dropped on target

      // If box ref is null exit the function
      if (!ref.current) {
        return;
      }

      // Don't replace items with themselves
      // Exit if dragged box is hovering over its own index
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveBox(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    /*
      useDrag hook provides a way to wire in the component into the DnD
      system as a drag source
    */

    // type: used by the "accept specification" of drop targets
    item: { type: ItemTypes.BOX, id, index },
  });

  drag(drop(ref));

  // Box dimensions
  // Decrease box size as the number of columns increases
  // So that the grids fits the screen size
  let dims;
  if (numCols <= 5) {
    dims = width >= 700 ? 150 : 80;
  } else if (numCols === 6) {
    dims = width >= 700 ? 134 : 68;
  } else if (numCols === 7) {
    dims = width >= 700 ? 113 : 57;
  } else if (numCols === 8) {
    dims = width >= 700 ? 99 : 49;
  } else if (numCols === 9) {
    dims = width >= 700 ? 87 : 39;
  } else if (numCols === 10) {
    dims = width >= 700 ? 78 : 32;
  }

  // Box style
  const style = {
    // Box height based on dimensions
    height: boxType === "square" ? dims + "px" : dims / 0.7 + "px",
    width: dims + "px",
    backgroundColor: "lightgrey",
    margin: boxMargin,
    border: "none",
  };
  return (
    <div
      className="box"
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        backgroundSize: `${dims}px ${
          boxType === "square" ? dims : dims / 0.7
        }px`,
        borderRadius: `${borderRadius}%`,
      }}
      ref={ref}
      onClick={() => handleClick(id)}
    ></div>
  );
};
export default Box;
