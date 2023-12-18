import Company from '@/components/atoms/company/Company';
import React from 'react';
import styled from 'styled-components';

const TextAndCompany = () => {
  return (
    <Container>
      <Company />
      <Span>گلوکارد</Span>
    </Container>
  );
};

export default TextAndCompany;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  color: #515b68;
  font-size: 17px;
`;
