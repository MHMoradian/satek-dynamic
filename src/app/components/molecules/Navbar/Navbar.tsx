import styled from "styled-components";
import Link from "../../atoms/Link/Link";
import React from "react";

type NavbarProps = {
  menuItems: { name: string; route: "#"; icon: React.ReactNode }[];
};

const Navbar = (props: NavbarProps) => {
  return (
    <StyledMenu>
      {props.menuItems.map((menuItem) => {
        return (
          <MenuItem>
            <Link href={menuItem.route || "#"}>
              {menuItem.name} {menuItem.icon}
            </Link>
          </MenuItem>
        );
      })}
    </StyledMenu>
  );
};

export default Navbar;

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  gap: 5rem;
  margin-right: 8rem;
`;

export const MenuItem = styled.li`
  list-style: none;
`;
