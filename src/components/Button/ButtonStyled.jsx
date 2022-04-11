import styled from "styled-components";

import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fab209" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ primary }) => (!primary ? "#fab209" : "#010606")};
  }
`;
