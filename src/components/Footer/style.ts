import styled from "styled-components";

export const FooterPage = styled.div`
    width: 98.75vw;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 25rem;

    @media(max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        height: 36rem;
    }

    .Logo-CineLib {
        width: 25rem;
        margin: 5rem;

        @media(max-width: 1000px) {
            margin-left: 0;
            margin-right: 0;
        }

        @media(max-width: 520px) {
            width: 15rem;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        color: white;
    }

    .profiles {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 2rem;
        margin-right: 2rem;

        @media(max-width: 520px){
            margin-left: 2rem;
            margin-bottom: 2rem;
        }
    }
    
    .GitHub-profile, .LinkedIn-profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        color: white;
        
    };

    .Logo-GitHub, .Logo-LinkedIn {
        width: 5rem;
    };

    .GitHub-link, .linkedIn-link {
        color: white;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: #f0f062;
        }
    }
`