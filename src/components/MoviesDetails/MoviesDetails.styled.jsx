import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Link = styled(NavLink)`
    display: inline-block;
    font-weight: 600;
    padding: 10px 16px;
    opacity: 0.6;
    text-decoration: none;
    color: rgba(14, 14, 14, 0.885);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

     &:hover {
    opacity: 1;
    }
`;

export const CardBox = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 100%;
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-evenly;
    width: 60%;
`
export const Title = styled.h2`
  font-size: 16px;
`