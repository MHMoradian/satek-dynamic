import styled from "styled-components";
import { Link } from "../../atoms/Link/Link";

type NavbarProps = {
  menuItems: { name: string; route: "#"; icon: React.ReactNode }[];
};

const Navbar = (props: NavbarProps) => {
  let number = 0;
  return (
    <StyledMenu className="nav-list">
      {props.menuItems.map((menuItem) => {
        return (
          <MenuItem key={number++} className="nav-item">
            <Link href={menuItem.route || "#"}>
              {menuItem.icon}
              <span>{menuItem.name}</span>
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
  margin-right: 9rem;
`;

export const MenuItem = styled.li`
  list-style: none;
`;
