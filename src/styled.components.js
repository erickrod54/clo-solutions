import styled from "styled-components";

export const MainButton = styled.a`
margin:2rem;
padding: 2rem;

    .main-button {
        border-radius: 0.75rem;
        border: 1px solid var(--color-fifth-dark);
        background-color: var(--color-fifth);
        margin-left: var(--font-size-title);
        margin-bottom: 5rem;
        color: var(--font-color-brown-dark);
        font-weight: 500;
    }

    .main-button:hover{
        background-color: var(--clr-white);
        border: 1px solid var(--color-secondary);
        border-radius: 0.75rem;
        color: var(--color-sixth);
    }
`