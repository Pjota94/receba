import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: rgba(38, 33, 33, 1);
  height: 7.312rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: rgba(108, 99, 255, 0.94);
    border: none;
    border-radius: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: rgba(255, 255, 255, 1);
    width: 6.875rem;
    height: 2.562rem;
    margin-right: 6.375rem;
  }

  button:hover {
    background-color: rgb(76, 68, 226);
  }
`;
