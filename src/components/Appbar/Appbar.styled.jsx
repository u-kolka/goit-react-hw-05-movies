import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 6px 24px;
  margin: 0 -24px;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: rgb(255, 40, 90);
    transform: scale(1.2);
  }
`;
