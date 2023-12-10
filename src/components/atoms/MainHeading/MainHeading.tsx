import styled from 'styled-components';


  

interface MainHeadingProps {
  color?: string;
  fontSize?: string;
  textAlign?: string;
  width?: string;
  height?: string;
}

const MainHeading = styled.h1<MainHeadingProps>`
  color: ${({ color }) => color || '#2E4470'};
  font-size: ${({ fontSize }) => fontSize || '2em'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
`;

export default MainHeading;