import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  margin-top: -80px;
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  font-style: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  justify-self: flex-start;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
`;
export const MobileIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  display: block;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLink = styled(LinkS)`
  color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  &.active {
    border-bottom: 1px solid #fab209;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLinkR = styled(LinkR)`
  color: #010606;
  background: #fab209;
  padding: 10px 22px;
  border-radius: 50px;
  white-space: nowrap;
  font-size: 1rem;
  outline: none;
  border: none;
  text-decoration: none;
  transition: all ease-in-out 0.2s;
  &:hover {
    transition: all ease-in-out 0.2s;

    color: #fab209;
    background: #fff;
  }
`;
