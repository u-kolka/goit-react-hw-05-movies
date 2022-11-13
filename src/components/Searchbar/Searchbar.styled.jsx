import styled from "styled-components"

export const SearchForm = styled.form`
     display: flex;
     align-items: flex-end;
     justify-content: space-between;
     padding-top: 10px;
     margin: 0 auto;
     width: 100%;
     max-width: 400px;
     background-color: #fff;
     overflow: hidden;
`
 export const SearchFormInput = styled.input`
     display: inline-block;
     width: 80%;
     font: inherit;
     font-size: 20px;
     border: none;
     border-bottom: solid 2px rgb(255, 40, 90);
     outline: none;

     &::placeholder {
      font: inherit;
  }
`

export const SearchFormButton = styled.button`
     display: inline-block;
     width: 60px;
     height: 25px;
     border: 0;
    font-weight: 600;
     opacity: 0.6;
    background-color: rgb(255, 40, 90);
     transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
     cursor: pointer;
     outline: none;

     &:hover {
    opacity: 1;
    }
`

