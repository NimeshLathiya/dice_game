import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background: #000000;
  border-radius: 5px;
  width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: all 0.9s;
  font-weight: 600;

  &:hover {
    background-color: white;
    cursor: pointer;
    color: black;
    font-weight: 600;
    border: 1px solid black;
    transition: all 0.9s;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border: 1px solid transparent;
  }
`;
