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
const Navbar = () => {
  return (
    <Nav>
      <StyledContainer>
        <NavLogo to="/">MSONews</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Roadmap</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLinkR to="/login">Login</NavBtnLinkR>
        </NavBtn>
      </StyledContainer>
    </Nav>
  );
};

export default Navbar;
