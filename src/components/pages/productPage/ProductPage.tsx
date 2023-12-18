import React from 'react';
import Template from '@/components/templates/Template';
import ProductSpecifications from '@/components/organisms/productspecifications/ProductSpecifications';
import styled from 'styled-components';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import FilterIcon from '../../atoms/icons/FilterIcon';
import SortIcon from '../../atoms/icons/SortIcon';
import { Button } from '../../atoms/Button/Button';

const ProductPage = () => {
  return (
    <Template>
      <TopButtonsContainer>
        <Button>
          <FilterIcon />
          فیلتر
        </Button>
        <Button>
          {' '}
          <SortIcon />
          مرتب سازی
        </Button>
        <SearchBar />
      </TopButtonsContainer>
      <Container>
        <ProductSpecifications
          header="کیت آزمایشگاهی ۹۶ TSH شرکت مونوبایند"
          amount={12000}
        />
        <ProductSpecifications
          header="کیت آزمایشگاهی ۹۶ TSH شرکت مونوبایند"
          amount={12000}
        />
        <ProductSpecifications
          header="کیت آزمایشگاهی ۹۶ TSH شرکت مونوبایند"
          amount={12000}
        />
        <ProductSpecifications
          header="کیت آزمایشگاهی ۹۶ TSH شرکت مونوبایند"
          amount={12000}
        />
      </Container>
    </Template>
  );
};

export default ProductPage;

const Container = styled.div`
  padding-right: 118px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;
  width: 1388px;
  margin: auto;
  margin-top: 67px;
  gap: 43px;
`;
const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;
  gap: 1.5rem;
  > button {
    /* width */
    color: #4579dc;
    border: none;
    font-size: 1rem;
  }
  margin-left: 260px;
`;
