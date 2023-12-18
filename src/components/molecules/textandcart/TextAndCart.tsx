import Cart from '@/components/atoms/icons/Cart';
import React from 'react';
import styled from 'styled-components';

const TextAndCart = () => {
  return (
    <Container>
      <Cart />
      <Span>کالای ضروری</Span>
    </Container>
  );
};

export default TextAndCart;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  color: #515b68;
  font-size: 17px;
`;
