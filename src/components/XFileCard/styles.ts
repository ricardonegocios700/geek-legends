import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    background-color: #f5f5f5;
    border: 2px solid #000;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;

    & article {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        font-family: var(--font-family-primary);

        & h1 {
            width: 150px;
        }

        & p {
            width: 100%;
            margin: 10px 0;
            text-align: justify;
        }
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & span {
            font-weight: 700;
        }
    }

    & button {
        border: transparent;
        font-size: 30px;
        color: var(--red-button);
    }

    @media only screen and (min-width: 400px) {
        & div {
            justify-content: space-evenly;
        }
    }

    @media only screen and (min-width: 800px) {
        flex-wrap: nowrap;

        & article > p {
            width: 90%;
        }

        & div {
            width: 200px;
        }
    }
`;
