import React from "react";
import styled from "styled-components";
import { useCloContext } from "../context";


/**vlv-villages version 1.04 - FooterComponent -
 * Features:
 * 
 *   --> Changing clasName by id.
 * 
 * Note: Changes will be done later in this 
 * component
 */

const FooterComponent = () => {

    const { contactInfo } = useCloContext()

    const cellphone = contactInfo[0].cellphone;
    
    return(
        <section id='footer'>
        <Wrapper>
            <p>&copy; { new Date().getFullYear()}</p>
            <span> Clo Solutions  |  Organization Services </span>
            <p>Free consultation Phone: <strong>{cellphone}</strong></p>
            <p>  All Rights reserved</p>
        </Wrapper>
      </section>
    )
}

const Wrapper = styled.footer`
  margin: 3rem;
  padding: 3rem;  
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    font-size: var(--font-size-footer);
    color: var(--font-color-brown-dark);
  }

  p {
    font-size: var(--font-size-footer-up-down);
    color: var(--font-color-brown-m-ligth);
    margin: 0.5rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`

export default FooterComponent;

