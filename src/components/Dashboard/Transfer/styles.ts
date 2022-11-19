import styled from "styled-components";

export const Container = styled.div`
  width: 19.125rem;
  height: 15.187rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  border: 1px solid rgba(108, 99, 255, 1);

  form {
    margin-left: 1.375rem;
  }

  .text-transfer {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0.437rem;
  }

  label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    margin-top: 0.437rem;
    margin-bottom: 0.437rem;
  }

  input {
    width: 16.187rem;
    height: 2.375rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 8px;
    border: 1px solid rgba(108, 99, 255, 1);
    padding-left: 1.014rem;
  }

  button {
    width: 16.187rem;
    height: 2.375rem;
    background-color: rgba(108, 99, 255, 1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0.625rem;
    border: none;
  }

  button:hover {
    background-color: rgb(76, 68, 226);
  }

  .div-balance {
    width: 16.187rem;
    height: 2.812rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1.875rem;
  }

  .text-balance {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }

  .money {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: rgba(108, 99, 255, 1);
  }
`;
