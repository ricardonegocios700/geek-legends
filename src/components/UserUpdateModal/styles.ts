import styled from "styled-components";

export const Modal = styled.div`
    top: 20%;
    /* left: 25%; */
    /* transform: translateX(-25%); */
    /* max-height: 50vh; */
    min-width: 50vw;
    position: fixed;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border-top: 5px solid darkblue;
    border-bottom: 5px solid darkblue;
    font-size: 18px;
    /* visibility: hidden; */
    /* color: aliceblue; */
    box-shadow: 1px 1px 30px 5px #0a0a0a;
    z-index: 1;

    & > h1 {
        margin: 10px 0;
        font-family: var(--font-family-primary);
        color: var(--back-color);
    }

    & > button {
        width: 80%;
        font-family: var(--font-family-secondary);
        border: 2px solid darkblue;
    }

    & > label {
        width: 80%;
        color: #000;
        text-align: left;
        font-family: var(--font-family-secondary);
    }

    & > input,
    textarea {
        width: 80%;
        margin: 5px 0;
        border: 2px solid #0a0a0a;
        border-radius: 10px;
        font-size: 16px;
        font-family: Comic Neue;
        padding: 10px;
    }

    & > textarea {
        height: 70px;
    }

    @media only screen and (min-width: 400px) {
    }
    @media only screen and (min-width: 800px) {
        left: 25%;
        max-height: 50vh;

        & > button {
        width: 50%;        
    }
    }
`;
