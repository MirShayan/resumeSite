import React from "react";
import {
  StyledContainer,
  CloseIcon,
  Icon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrapper,
  SidebarRoute,
} from "./styledSidebar";
import navMenuItems from "../../data/menuItems";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <StyledContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navMenuItems.map(({ id, title, address }) => {
            return (
              <SidebarLink key={id} to={address}>
                {title}
              </SidebarLink>
            );
          })}
        </SidebarMenu>
        <SideBtnWrapper>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrapper>
      </SidebarWrapper>
    </StyledContainer>
  );
};

export default Sidebar;
