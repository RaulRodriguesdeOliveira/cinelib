import styled from "styled-components";

interface DetailsProps {
  backgroundimage: string;
}

export const MovieImages = styled.div<DetailsProps>`
  position: relative;
  width: 98.75vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 15vh;
  z-index: 1;

  @media (max-width: 520px) {
    top: 18rem;
  }


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.backgroundimage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* filter: blur(5px); */
    z-index: 0;
  }

  .blur-background {
    backdrop-filter: blur(5px);
    height: 70vh;
    width: 98.75vw;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    text-align: center;
  }

  .movie-img {
    position: relative;
    width: 17rem;
    margin-top: 18vh;
    padding: 0;
    z-index: 2;
    box-shadow: 1px 3px 5px 3px black;

    @media (max-width: 821px) {
        margin-top: 32vh;
    }
  }
`;

export const Info = styled.div`
  width: 98.75vw;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  background: rgb(139, 139, 134);
  background: radial-gradient(
    circle,
    rgba(139, 139, 134, 1) 0%,
    rgba(12, 12, 12, 1) 0%,
    rgba(31, 5, 5, 1) 100%
  );
  @media (max-width: 520px) {
    margin-top: 18rem;
  }

  .tv-title {
    margin-top: 28vh;
    text-align: center;
    justify-content: center;
  }

  .tv-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & span {
      font-size: 1.6rem;
    }
  }

  .tv-overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    max-width: 80vw;
    text-align: center;
  }

  .overview-text {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  .production-companies {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;

    @media (max-width: 520px) {
      /* margin-right: 4rem; */
    }
  }

  .companies {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    max-width: 80vw;
    flex-wrap: wrap;
    /* width: 100%; */

    @media (max-width: 520px) {
      flex-direction: column;
      /* margin-right: 3rem; */
    }
  }

  .production {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .production-logo {
    width: 10rem;
    margin-bottom: 1rem;
  }

  .homepage {
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & a {
      font-size: 1.5rem;
      color: white;
      margin-top: 1rem;
      text-decoration: none;
      margin-bottom: 5rem;
      transition: 0.5s;

      &:hover {
        color: #f0f062;
        text-decoration: underline;
      }
    }
  }
`;
