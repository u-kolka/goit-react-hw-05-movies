import ReactPaginate from 'react-paginate';
import styled from "styled-components"

export const MyPagin = styled(ReactPaginate)`
    display: flex;
    justify-content: center;
    gap: 10px;


    >li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 36px;
    background-color: rgb(255,40,90);
    border-radius: 50%;

        &.selected {
            color: rgb(118, 126, 133);
            border: solid 1px rgb(118, 126, 133);
            transform: scale(1.2);
            }
    
        >a {
        width: 100%;
        padding: 10px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        }
    }
`