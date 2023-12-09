import { Sail } from "next/font/google";
import React from "react";
import Sale from "../templates/Template";
import Card from "../atoms/Card/Card";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Sale>
      <Card>
        <Styles>hello wrold</Styles>
      </Card>
    </Sale>
  );
};

const Styles = styled.div`
  background-color: blue;
  color: red;
  font-size: 20px;
`;

export default HomePage;
