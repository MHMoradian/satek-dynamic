import styled from "styled-components";

export const Card = styled.div<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: #fff;
  margin: 3.5rem auto;
  border-radius: 1.5rem;
`;
