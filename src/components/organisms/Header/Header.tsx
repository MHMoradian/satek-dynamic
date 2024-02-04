import Navbar from "../../molecules/Navbar/Navbar";
import React from "react";
import styled from "styled-components";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import { Link } from "../../atoms/Link/Link";

type HeaderProps = {
  menuItems: { name: string; route: "#"; icon: React.ReactNode }[];
  userName?: string;
  userImage?: string;
};

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo>
        <Link href="#" className="header-logo-link">
          <span>⌄</span>
          {props.userName && <span>{props.userName}</span>}
          {props.userImage && <ProfileImage src={props.userImage} />}
        </Link>
      </HeaderLogo>
      <Navbar menuItems={props.menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fff;
  width: 100%;
  /* padding: 1rem 0; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 1rem; */
  background-color: #fff;
  border: none;

  .nav-item {
    a {
      font-size: 1.35rem;
    }
  }
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #89959f;
  font-size: 20px;
  gap: 0.5rem;
  padding: 15px 10px;
  position: fixed;
  left: 25px;
  .header-logo-link {
    &:hover {
      border: 3px solid transparent;
    }
  }
`;

export default Header;
