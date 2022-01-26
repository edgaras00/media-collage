import React from "react";
import Options from "./Components/Options";
import Container from "./Components/Container";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./styles/app.css";

function App() {
  return (
    <div className="app-container">
      <Options />
      <DndProvider backend={Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}

export default App;
