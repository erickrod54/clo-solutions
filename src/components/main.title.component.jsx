import React from "react";
import styled from "styled-components";

const Maintitle = ({ title }) => {
    
    return(
        <>
        <section id='main-title-pages'>
            <MaintitleWrapper>
                {title}
            </MaintitleWrapper>
        </section>
        </>
    )
}

const MaintitleWrapper = styled.section`
    border: 1.5px solid var(--color-sixth);
    border-radius: 0.75rem;
    width: fit-content;
    background-color: var(--color-fifth);
    margin: 3rem;
    padding: 3rem;
    font-size: 3rem;
    color: var(--font-color-brown-dark);
`

export default Maintitle;