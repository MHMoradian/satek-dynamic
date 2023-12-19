import styled from "styled-components";

interface SecondaryHeadingProps {
  margin: string;
  fontSize: string;
}

export const SecondaryHeading = styled.h2<SecondaryHeadingProps>`
  color: #c4c4c4;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
`;
