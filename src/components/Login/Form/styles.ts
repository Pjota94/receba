import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  .label-username {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    margin-bottom: 0.375rem;
  }

  .label-password {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    margin-top: 0.375rem;
    margin-bottom: 0.375rem;
  }

  input {
    padding-left: 1.014rem;
  }

  button {
    border-radius: 8px;
    background-color: rgba(108, 99, 255, 1);
    width: 16.187rem;
    height: 2.375rem;
    border: none;
    margin-top: 1.375rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 255, 255, 1);
  }

  button:hover {
    background-color: rgb(76, 68, 226);
  }
`;
