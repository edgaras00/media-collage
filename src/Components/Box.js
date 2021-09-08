import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import "../styles/box.css";

const Box = ({
  id,
  index,
  moveBox,
  image,
  margin,
  handleClick,
  numCols,
  boxType,
  borderRadius,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    // The useDrop hook provides a way to wire in the component
    // into the DnD system as a drop target

    // The "type" to accept as a droppable object
    accept: ItemTypes.BOX,

    drop(item, monitor) {
      // Function that is called when a compatible item is dropped
      // on the target

      // If box ref is null exit the function
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      // If dragged box is hovering over its own index
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveBox(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    // useDrag hooks provides a way to wire in the component
    // into the DnD system as a drag source

    // "type" is required. It is used by the "accept specification"
    // of drop targets
    item: { type: ItemTypes.BOX, id, index },
    // The "collect" function utilizes a "monitor" instance to pull
    // important pieces of state from the DnD system
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  // Box dimensions
  // Decrease box size as the number of columns increases
  // So that the grids fits the screen size
  let dims;
  if (numCols <= 5) {
    dims = 160;
  } else if (numCols === 6) {
    dims = 140;
  } else if (numCols === 7) {
    dims = 130;
  } else if (numCols === 8) {
    dims = 110;
  } else if (numCols === 9) {
    dims = 100;
  } else if (numCols === 10) {
    dims = 90;
  }

  // Box style
  const style = {
    // Box height based on dimensions
    height: boxType === "square" ? dims + "px" : dims / 0.7 + "px",
    width: dims + "px",
    backgroundColor: "lightgrey",
    margin: margin,
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
