// import { Sail } from "next/font/google";
import React from "react";
import Sale from "../templates/Template";
import MainCard from "../atoms/MainCard/MainCard";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Sale>
      <MainCard backgroundColor="red" width="500px">
        <Styles>hello wrold</Styles>
      </MainCard>
    </Sale>
  );
};

const Styles = styled.div`
  background-color: blue;
  color: red;
  font-size: 20px;
`;

export default HomePage;
