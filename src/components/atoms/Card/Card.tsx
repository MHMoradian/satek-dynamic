import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const Card: FC<IProps> = ({ children }) => {
  return <StyledSale>{children}</StyledSale>;
};

export default Card;

const StyledSale = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #fff;
  margin: 5rem auto;
  border-radius: 1.5rem;
`;
