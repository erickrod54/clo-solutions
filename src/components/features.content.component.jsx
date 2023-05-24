import React from "react";
import styled from "styled-components";
import { useCloContext } from "../context";
import { MainButton } from "../styled.components";

/**vlv-villages version 1.04 - FeaturesContent  -
 * Features:
 * 
 *   --> Changing clasName by id.
 * 
 * Note: Changes will be done later in this 
 * component
 */


const FeaturesContent = () => {

    const { backgroundsImages } = useCloContext();

    console.log('backgroundsImages ==>', backgroundsImages)

    const consultationbkg = backgroundsImages[4].imagesbkg;
    const consultationbkgremove = backgroundsImages[7].imagesbkg;

    return(
        <ConsultationWrapper id="features-content" consultationbkg={consultationbkg} consultationbkgremove={consultationbkgremove}>
            <MainButton>
            <a href="https://drive.google.com/file/d/17rVGmTzVqXXsRGdY1d1SayjV9nt7tsD3/view?usp=sharing" className="main-button" target="_blank" rel="noopener noreferrer">download our services sheet</a>
            </MainButton>
        </ConsultationWrapper>
    )
}

const ConsultationWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${({consultationbkg}) => consultationbkg});

    @media screen and (max-width:600px){
        background-image: url(${({consultationbkgremove}) => consultationbkgremove});
        background-size: 45rem;
    }
`

export default FeaturesContent;