import styled from "styled-components";

export const Card = styled.div<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$width};
  background-color: #fff;
  margin: 5rem auto;
  border-radius: 1.5rem;
`;
