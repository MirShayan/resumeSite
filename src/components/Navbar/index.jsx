import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  StyledContainer,
  NavLogo,
  NavMenu,
  NavItem,
  MobileIcon,
  NavLink,
  NavBtn,
  NavBtnLinkR,
} from "./styledNavbar";
import navMenuItems from "../../data/menuItems";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <StyledContainer>
        <NavLogo to="/">MSONews</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navMenuItems.map(({ id, title, address }) => {
            return (
              <NavItem key={id}>
                <NavLink to={address}>{title}</NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
        <NavBtn>
          <NavBtnLinkR to="/login">Login</NavBtnLinkR>
        </NavBtn>
      </StyledContainer>
    </Nav>
  );
};

export default Navbar;
