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
    height: 18rem;
  }

  .cinelib-logo {
    width: 11rem;
    margin-left: 2rem;

    @media (max-width: 520px) {
      margin: 1rem 0 0 0;
    }
  }

  .catalog {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    color: white;
    width: 100%;
    justify-content: flex-end;
    margin-right: 3rem;
    
  @media (max-width: 520px) {
    margin: 0;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
  }

  .search-bar {
    background-color: white;
    color: black;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    border: none;
    width: 20rem;
  }

  .movies, .tvseries {
    color: white;
    font-size: 1.2rem;
    transition: 0.4s;

    &:hover {
      color: #f0f062;
    }
  }

  .languages {
    background-color: black;
    border: transparent;
    margin-right: 2rem;
    cursor: pointer;

    @media(max-width: 520px) {
        margin-right: 0;    
        margin-bottom: 2rem;
    }
  }

`;
