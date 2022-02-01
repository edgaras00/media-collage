import React from "react";
import Options from "./Components/Options";
import Container from "./Components/Container";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./styles/app.css";

function App() {
  return (
    <DndProvider backend={Backend}>
      <div className="app-container">
        <Options />
        <Container />
      </div>
    </DndProvider>
  );
}

export default App;
