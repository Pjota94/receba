import styled from "styled-components";

export const Container = styled.div`
  width: 20.625rem;
  height: 24.812rem;
  border-radius: 4px;
  background: rgba(108, 99, 255, 0.58);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.125rem;

  .tittle {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 1.25rem;
    padding-top: 1.687rem;
  }

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    margin-top: 1.25rem;
  }
`;
