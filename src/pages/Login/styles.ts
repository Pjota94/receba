import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .img-login {
    width: 39rem;
    height: 42rem;
    margin-left: 8.937rem;
  }

  @media (max-width: 1124px) {
    .img-login {
      width: 35rem;
      height: 38rem;
      margin-left: 6.937rem;
    }
  }

  @media (max-width: 1024px) {
    .img-login {
      width: 30rem;
      height: 33rem;
      margin-left: 4.937rem;
    }
  }

  @media (max-width: 900px) {
    .img-login {
      width: 25rem;
      height: 28rem;
      margin-left: 2.937rem;
    }
  }

  @media (max-width: 795px) {
    .img-login {
      /* width: 25rem;
      height: 28rem;
      margin-left: 2.937rem; */
      display: none;
    }
  }
`;
