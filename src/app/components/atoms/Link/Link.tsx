import styled from "styled-components";

type LinkProps = {
  children: string | React.ReactNode;
  href: string;
  className?: string;
};

const Link = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;

export const StyledLink = styled.a`
  font-size: 24px;
  color: #c4c4c4;
  text-decoration: none;
  padding: 1.2rem 0.5rem;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 1rem;

  svg {
    width: 32px;
    height: 32px;
    stroke: currentColor;
    path {
      stroke: currentColor;
    }
    circle {
      stroke: currentColor;
    }
  }

  &:hover {
    color: #4579dc;
    border-bottom: 3px solid #4579dc;
    transition: 0.3s ease-in;
  }
`;
