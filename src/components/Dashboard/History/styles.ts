import styled from "styled-components";

export const Container = styled.div`
  width: 23.375rem;
  height: 20.187rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(108, 99, 255, 1);

  .text-history {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0.562rem;
    margin-bottom: 0.937rem;
  }

  .div-buttons {
    width: 326.99px;
  }

  button {
    width: 4.5rem;
    height: 1.375rem;
    color: rgba(255, 255, 255, 1);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    background-color: rgba(108, 99, 255, 1);
    border-radius: 8px;
    margin-right: 0.093rem;
    border: none;
  }

  button:hover {
    background-color: rgb(76, 68, 226);
  }

  .div-history {
    width: 20.437rem;
    height: 11.812rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 8px;
    margin-top: 1.25rem;
    border: 1px solid rgba(108, 99, 255, 1);
    overflow: scroll;
  }

  .div-history::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  .div-history::-webkit-scrollbar-thumb {
    background: rgba(108, 99, 255, 1);
    border-radius: 5px;
  }
`;
