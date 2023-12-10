import styled from 'styled-components';
import { FC, ReactNode } from "react";


  const MainCard: FC<MainDivProps> = ({ children }) => {
    return <StyledIndetityInformation>{children}</StyledIndetityInformation>;
};

interface MainDivProps {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  margin?: string;
  display?: string;
  children: ReactNode;
}

const StyledIndetityInformation = styled.div<MainDivProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border: 2px solid ${({ borderColor }) => borderColor || 'defaultBorderColor'};
  border-radius: ${({ borderRadius }) => borderRadius || '1.5rem'};
  width: ${({ width }) => width || '1000px'};
  height: ${({ height }) => height || '700px'};
  margin: ${({margin}) => margin || '5rem auto'};
  display: ${({display}) => display || 'flex'};
  flex-direction: column;
`;

export default MainCard;