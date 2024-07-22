import styled from "styled-components";

const NumberSelector = ({
  setError,
  setSelectedNumber,
  selectedNumber,
  error,
}) => {
  let arrNum = [1, 2, 3, 4, 5, 6];

  const handleNumber = (item) => {
    setSelectedNumber(item);
    setError("");
  };

  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((item, i) => (
          <Box
            isselected={item === selectedNumber}
            key={i + 1}
            onClick={() => handleNumber(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 66px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  transition: all 0.7s;
  cursor: pointer;

  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};

  /* &:hover {
    background-color: #000000;
    color: white;
    transition: all 0.7s;
  } */
`;
