import React from "react";
import styled from "styled-components";
import ThreeButtons from "../molecules/ThreeButtons/ThreeButtons";

const Sale = () => {
  return (
    <StyledSale>
      <div className="sale-container">
        <h1 className="sale-heading">تعهدات مکانی و زمانی</h1>
        <br />
        <br />
        <br />
        <br />
        <h4 className="sale-delivery-heading">ساعات سرویس دهی</h4>
        <ThreeButtons
          firstText="۸ الی ۱۵"
          secondText="۸ الی ۲۲"
          thirdText="شبانه روز"
        />
      </div>
    </StyledSale>
  );
};

export default Sale;

const StyledSale = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #fff;
  margin: 5rem auto;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;

  .sale-container {
    margin: 1rem auto;
  }

  .sale-heading {
    /* margin-right: 1rem; */
  }

  .sale-delivery-heading {
    margin-bottom: 1rem;
  }
`;
