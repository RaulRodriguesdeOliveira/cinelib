import styled from "styled-components";

export const PageBody = styled.div`
  .body-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(139, 139, 134);
    background: radial-gradient(
      circle,
      rgba(139, 139, 134, 1) 0%,
      rgba(12, 12, 12, 1) 0%,
      rgba(31, 5, 5, 1) 100%
    );
    /* margin-left: 2rem; */
    width: 100vw;  
    /* padding-left: 5rem;
    padding-right: 5rem; */
    margin-top: 7rem;

    @media(max-width: 520px) {
      width: 100%;
      margin-top: 18rem;
    }

  }
  
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97.8vw;
    margin: 0;
  }

  .search-bar {
    margin-top: 2rem;
    background-color: white;
    color: black;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    border: none;
    width: 50%;
  }
`;

export const PageControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & button {
    background-color: red;
    transition: 0.3s;
    border-radius: 5px;
  }
  & button:hover {
    background-color: black;
    border: solid gray 1px;
  }

  & input {
    background-color: #1f0505;
    border: white;
    max-width: 3rem;
    color: white;
  }
  & input::placeholder {
    color: white;
  }
  span {
    color: white;
  }
`;
