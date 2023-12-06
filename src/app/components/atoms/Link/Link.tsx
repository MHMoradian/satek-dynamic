import styled from "styled-components";

type LinkProps = {
  children: string | React.ReactNode;
  href: string;
};

const Link = (props: LinkProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;

export const StyledLink = styled.a`
  font-size: 24px;
  color: #c4c4c4;
  text-decoration: none;
  padding: 4px 10px;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #4579dc;
    border-bottom: 1px solid #4579dc;
    transition: 0.3s ease-in;
  }
`;
