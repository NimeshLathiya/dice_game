import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ , rollDice }) => {
  return (
    <DieceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          style={{ height: "150px", width: "150px" }}
          alt="dice 1"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DieceContainer>
  );
};

export default RollDice;

const DieceContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
