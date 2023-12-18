import React from 'react';
import styled from 'styled-components';

interface IProps {
  amount: number;
}

const BoxForPrice = ({ amount }: IProps) => {
  return (
    <OuterDiv>
      <InnerDiv>{amount}</InnerDiv>
      <Span>تومان</Span>
    </OuterDiv>
  );
};

export default BoxForPrice;

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const InnerDiv = styled.div`
  background-color: #c4c4c4;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 7px 6px;
  color: #515b68;
  font-size: 20px;
`;
const Span = styled.span`
  font-size: 17px;
  color: #89959f;
`;
