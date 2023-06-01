import React from "react";
import { useCloContext } from "../context";
import { FeaturesComponent, Maintitle } from '../components/index.components';
import styled from "styled-components";

const AboutUs = () => {
    
    
    const { aboutUsData } = useCloContext();
    console.log('aboutUsData ==>', aboutUsData)
    
    const aboutUsText = aboutUsData[0].text;
    const aboutFirstPara = aboutUsText.slice(0,515);
    const aboutSecondPara = aboutUsText.slice(515,810);
    const aboutThirdPara = aboutUsText.slice(810,1237);
    const aboutFourthPara = aboutUsText.slice(1237,1400);

    return(
        <>
        <Maintitle title={<h2>About us</h2>}/>
        <AboutUsWrapper id='about-us-page'>
            <div className="about-us-page--content">
                    <p>
                        {aboutFirstPara}
                    </p>

                    <p>
                        {aboutSecondPara}
                    </p>

                    <p>
                        {aboutThirdPara}
                    </p>

                    <p>
                        {aboutFourthPara}
                    </p>
            </div>
        </AboutUsWrapper>
        <FeaturesComponent />
        </>
    )
}

const AboutUsWrapper = styled.section`

    p{
        margin: 0.4rem;
        padding: 2rem;
        color: var(--font-color-brown-dark);
    }
`

export default AboutUs;