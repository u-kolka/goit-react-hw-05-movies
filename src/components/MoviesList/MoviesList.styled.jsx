import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(70vw);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  list-style: none;
`;

export const GalleryItem = styled.li`
  display: flex;
  gap: 12px;
  min-height: 150px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;