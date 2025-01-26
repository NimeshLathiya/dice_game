import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

function App() {

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
