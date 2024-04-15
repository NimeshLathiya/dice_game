import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../style/Button";
import Rules from "./Rules";
import Footer from "./Footer";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNum = random(1, 7);

    setCurrentDice(() => randomNum);

    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Main>
      <div className="top_sec">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setRules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {rules && <Rules />}
      <Footer />
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  .top_sec {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
`;
