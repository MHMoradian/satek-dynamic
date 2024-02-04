import styled from "styled-components";

interface props {
  width?: string;
  height?: string;
  padding: string;
  margin?: string;
}

export const Card = styled.div<props>`
  /* width: ${(props) => props.width};
  height: ${(props) => props.height}; */
  background-color: #fff;
  margin: 3.5rem auto;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
