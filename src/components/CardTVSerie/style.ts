import styled from "styled-components";


export const Poster = styled.div`
  display: block;
  flex: 1 1 20%;
  max-width: 20%;
  flex-direction: column;
  word-wrap: break-word;
  background: transparent;
  background-clip: border-box;
  border-radius: 0.25rem;
  width: 100%;

  @media (max-width: 1000px) {
    flex: 1 1 25%;
    max-width: 25%;
  }
  @media (max-width: 750px) {
    flex: 1 1 33%;
    max-width: 33%;
  }
  @media (max-width: 520px) {
    flex: 1 1 50%;
    max-width: 50%;
  }
  @media (max-width: 460px) {
    flex: 1 1 100%;
    max-width: 80%;
  }

  .body {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border: solid 1px gray;
    object-fit: cover;
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }

  .serie-img {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    &:hover img {
      transform: scale(1.1); /* Zoom effect */
    }
  }

  .serie-name {
    color: white;
    margin-top: 0.4rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-decoration: underline;
    transition: 0.3s;

    &:hover {
      color: #f0f062;
    }
  }
`;