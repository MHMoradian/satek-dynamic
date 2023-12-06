import Navbar from "../../molecules/Navbar/Navbar";
import React from "react";
import styled from "styled-components";

type HeaderProps = {
  menuItems: { name: string; route: "#"; icon: React.ReactNode }[];
};

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo>
        {/* <Logo src={logo} height={height} alt="Rocketlab Logo" /> */}
      </HeaderLogo>
      <Navbar menuItems={props.menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 1rem; */
  background-color: #fff;
  border: none;
`;

const HeaderLogo = styled.div`
  padding: 15px 10px;
  position: fixed;
  left: 25px;
`;

export default Header;
