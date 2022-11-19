import styled from "styled-components";

export const Container = styled.div`
  .div-auxiliar1 {
    display: flex;
    justify-content: center;
  }

  .title-dash {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 3rem;
  }

  .img-dash {
    width: 30rem;
    height: 37.812rem;
  }

  .animate__animated.animate__fadeIn {
    --animate-duration: 2s;
  }

  @media (max-width: 1275px) {
    .img-dash {
      width: 25rem;
      height: 32.812rem;
    }
  }
`;
