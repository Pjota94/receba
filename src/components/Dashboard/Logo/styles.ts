import styled from "styled-components";

export const Container = styled.div`
  img {
    margin-left: 6.375rem;
  }

  @media (max-width: 600px) {
    img {
      margin-left: 2.375rem;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 116px;
    }
  }
`;
