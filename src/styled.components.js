import styled from "styled-components";

export const MainButton = styled.div`
margin:3rem;
padding: 3rem;

    .main-button {
        margin: 1.5rem;
        padding: 1.5rem;
        text-transform: capitalize;
        border-radius: 0.25rem;
        border: 2px solid var(--color-fifth-dark);
        background-color: var(--color-fifth);
        margin-left: var(--font-size-title);
        margin-bottom: 5rem;
        color: var(--font-color-brown-dark);
        font-weight: 600;
    }

    .main-button:hover{
        background-color: var(--clr-white);
        border: 1px solid var(--color-secondary);
        border-radius: 0.75rem;
        color: var(--color-sixth);
    }
`

export const CardTitle = styled.div`
    i{
        margin: 0.6rem;
        font-size: var(--font-size-para--600);
        color: var(--color-sixth);
    }

    .testimonials-card--back h2{
    background-color: var(--color-sixth);
    font-size: 1.2rem;
    padding: 1rem;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    .testimonials-card--back .testimonials-card--title i{
        color: var(--color-secondary);
    }

    .testimonials-card--title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }

    .testimonials-card--title i {
        
        margin-right: 0.5rem; /* Adjust the spacing between the icon and title as needed */
        }

`

export const PrincipalButton = styled(MainButton)`
margin:0rem;
padding: 0rem;
margin-left: 1rem;
margin-bottom: 4rem;
    
`

export const ColorfulButton = styled.div`
    
    .colorful-button {
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* Standard background-clip */
    background-clip: padding-box;
    /* -webkit-background-clip for compatibility */
    -webkit-background-clip: padding-box;
    }

    .colorful-button::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, #f54242, #f5a742, #f5f542, #42f586, #426af5, #d642f5, #f542a7, #f54242);
    background-size: 400% 400%;
    animation: colorful-background 8s linear infinite;
    z-index: -1;
    /* Standard background-clip */
    background-clip: padding-box;
    /* -webkit-background-clip for compatibility */
    -webkit-background-clip: padding-box;
    }

    @keyframes colorful-background {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
    }

`