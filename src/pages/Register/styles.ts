import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .img-register {
    width: 37.875rem;
    height: 34.75rem;
    margin-left: 8.937rem;
  }

  @media (max-width: 1124px) {
    .img-register {
      width: 35rem;
      height: 32rem;
      margin-left: 6.937rem;
    }
  }

  @media (max-width: 1024px) {
    .img-register {
      width: 30rem;
      height: 30rem;
      margin-left: 4.937rem;
    }
  }

  @media (max-width: 900px) {
    .img-register {
      width: 25rem;
      height: 23rem;
      margin-left: 2.937rem;
    }
  }

  @media (max-width: 795px) {
    .img-register {
      display: none;
    }
  }
`;
