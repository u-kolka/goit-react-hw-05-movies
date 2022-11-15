import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(75vw);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin: 0 auto 10px;
  list-style: none;
`;

export const GalleryItem = styled.li`
  display: flex;
  align-items: stretch;
  height: 200px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

    &:hover {
      color: rgb(118, 126, 133);
    }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Box = styled.div`
  padding: 10px;
`