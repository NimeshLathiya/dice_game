import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <>
      <ScoreContainer>
        <h2>{score}</h2>
        <p>Total Score</p>
      </ScoreContainer>
    </>
  );
};

export default ;

const ScoreContainer = styled.div`
  max-width: 300px;
  text-align: center;
  h2 {
    font-size: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
