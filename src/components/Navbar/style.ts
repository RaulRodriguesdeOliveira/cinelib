import styled from "styled-components";

export const NavContainer = styled.div`
  height: 7.5rem;
  width: 100vw;
  position: fixed;
  background: black;
  display: flex;
  top: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  z-index: 1000;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    height: 12rem;
  }

  .cinelib-logo {
    width: 11rem;
    margin-left: 2rem;

    @media (max-width: 520px) {
      margin: 1rem 0 0 0;
    }
  }

  .languages {
    background-color: black;
    border: transparent;
    margin-right: 2rem;

    @media(max-width: 520px) {
        margin-right: 0;    
        margin-bottom: 2rem;
    }
  }
`;
