import BoxForPrice from '@/components/atoms/boxforprice/BoxForPrice';
import Menu from '@/components/atoms/icons/Menu';
import IncreaseAndDecrease from '@/components/atoms/increaseanddecrease/IncreaseAndDecrease';
import TextAndCart from '@/components/molecules/textandcart/TextAndCart';
import TextAndCompany from '@/components/molecules/textandcompany/TextAndCompany';
import TextAndGerman from '@/components/molecules/textandgerman/TextAndGerman';
import React from 'react';
import styled from 'styled-components';

interface IProp {
  header: string;
  amount: number;
}

const ProductSpecifications = ({ header, amount }: IProp) => {
  return (
    <Container>
      <ContainerForRowOne>
        <Span>کالای اساسی / کاردیوپولمونری</Span>
        <Menu />
      </ContainerForRowOne>
      <PageHeader>{header}</PageHeader>
      <ContainerForDetails>
        <TextAndCart />
        <TextAndCompany />
        <TextAndGerman />
      </ContainerForDetails>
      <LastContainer>
        <BoxForPrice amount={amount} />
        <IncreaseAndDecrease />
      </LastContainer>
    </Container>
  );
};

export default ProductSpecifications;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-top: 11px;
  border-radius: 1.5rem;
  width: 600px;
`;
const ContainerForRowOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  font-size: 17px;
  color: #89959f;
  padding-right: 25px;
`;
const PageHeader = styled.h2`
  font-size: 17px;
  padding-top: 4px;
  padding-right: 25px;
`;
const ContainerForDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 397px;
  padding-top: 14px;
`;
const LastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 21px;
  padding-bottom: 28px;
  padding-top: 28px;
`;
