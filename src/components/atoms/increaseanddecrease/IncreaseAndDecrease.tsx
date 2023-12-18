import { count } from 'console';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  initialValue?: number;
}

const IncreaseAndDecrease: React.FC<IProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <Container>
      <CricleButton onClick={handleIncrement}>+</CricleButton>
      <Span>{count}</Span>
      <CricleButton onClick={handleDecrement}>-</CricleButton>
    </Container>
  );
};

export default IncreaseAndDecrease;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #aac6ff;
  border-radius: 20px;
  padding: 5px 6px;
  width: 145px;
`;
const CricleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aac6ff;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 2px solid #4579dc;
  color: #4579dc;
  text-align: center;
`;
const Span = styled.span`
  color: #4579dc;
  font-size: 20px;
`;
