import React from "react";
import styled from "styled-components";
import { useCloContext } from "../context";

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

    //console.log('backgroundsImages ==>', backgroundsImages)

    const consultationbkg = backgroundsImages[4].imagesbkg;

    return(
        <ConsultationWrapper id="features-content" consultationbkg={consultationbkg}>
            Consultation content
        </ConsultationWrapper>
    )
}

const ConsultationWrapper = styled.section`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${({consultationbkg}) => consultationbkg});
`

export default FeaturesContent;