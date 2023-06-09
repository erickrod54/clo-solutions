import React from "react";
import styled from "styled-components";
import { useCloContext } from "../context";
import Maintitle from "./main.title.component";

/**
 * 
 * set opacity in the bkgs of the cards
 * 
 * add custom styles to the different  'icon'
 */

const OurProcess = () => {

    const { backgroundsImages,testData, cloIcons } = useCloContext();

    const bkg1 = backgroundsImages[0].imagesbkg;
    const bkg2 = backgroundsImages[1].imagesbkg;
    const bkg3 = backgroundsImages[2].imagesbkg;
    const bkg4 = backgroundsImages[3].imagesbkg;
    const bkg5 = backgroundsImages[4].imagesbkg;
    const bkg6 = backgroundsImages[5].imagesbkg;

    //console.log('testBackgrounds ==>', testBackgrounds);
    //console.log('testData ==>', testData)

    const subtitle = testData[2].subtitle;
    const step1 = testData[2].step1;
    const step2 = testData[2].step2;
    const step3 = testData[2].step3;
    const step4 = testData[2].step4;
    const step5 = testData[2].step5;
    const step6 = testData[2].step6; 

    //console.log('organization desc ==>', organizationdesc)
    console.log('cloIcons desc ==>', cloIcons)

    const checkmark = cloIcons[2].icon;


    return(
        <>
        <Maintitle title={<h2>Our process</h2>}/>
        <div className="ourprocess--container"> 

        <TestimonialsWrapper id="ourprocess" bkg1={bkg1} bkg2={bkg2} bkg3={bkg3} bkg4={bkg4} bkg5={bkg5} bkg6={bkg6}>
        {testData.map((card) => {
            const { id, title, icon, description } = card
            return(
                <div key={id} className="testimonials-card">
                <div className="testimonials-card--front">
                <h2 className="testimonials-card--title"><i>{icon}</i> {title}</h2>
                </div>
                <div className="testimonials-card--back">
                <h2 className="testimonials-card--title"><i>{icon}</i> {title}</h2>    
                    { id === 3 ? 
                    <>
                    <ul>
                        <li>
                        <h3><p>{subtitle}</p></h3>  
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step1}</p>
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step2}</p>
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step3}</p>
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step4}</p>
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step5}</p>
                        </li>
                        <li>
                            <img src={checkmark} alt='checkmark'/> <p>{step6}</p>
                        </li>
                    </ul>
                    </>
                    :
                    <p>{description}</p>
                    }
                </div>
            </div>
            )
        })}
    </TestimonialsWrapper>
        </div>
        
        </>

        /**
         * <section id="ourprocess">
            <h2>Our process section</h2>
        </section>
         */
    )
}

const TestimonialsWrapper = styled.section`
    margin: 2rem;
    padding: 2rem;

   .testimonials-card{
    width: 28rem;
    height: 50rem;
    position: relative;
    }

    .testimonials-card--front,
    .testimonials-card--back,
    .testimonials-card:first-child .testimonials-card--front::before,
    .testimonials-card:nth-child(2) .testimonials-card--front::before,
    .testimonials-card:nth-child(3) .testimonials-card--front::before,
    .testimonials-card:nth-child(4) .testimonials-card--front::before{
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    box-shadow: 5px 5px 5px 5px #222;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 2s ease-in-out;
    backface-visibility: hidden; 
    transform: perspective(100rem);

    
    justify-items: center;
    align-items: start;
    padding: 3rem;
    }

    .testimonials-card--back h3 p{
        font-size: var(--font-size-footer-up-down);
    }

    .testimonials-card--back ul li p{
        margin-left: .5rem;
        font-size: var(--font-size-footer-up-down);
    }

    .testimonials-card--back ul{
        place-content: center;
    }

    .testimonials-card--back ul li{
        display: flex;
        margin: 1.5rem;
    }

    .testimonials-card--back ul li img{
        width: 2rem;
        height: 2rem;
       
    }

    

    .testimonials-card--front h2{
    background-color: var(--color-secondary-light);
    font-size: 1.2rem;
    padding: 1rem;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
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


    .testimonials-card--back h2{
        margin-bottom: 1.7rem;
    }

    ul li img {
        background-color: var(--color-sixth);
        border-radius: 50%;
    }

    .testimonials-card--back p{
    color: var(--font-color-brown-dark);
    place-self: center;
    font-size: 2rem;
    font-weight: 400;
    }

    .testimonials-card:first-child .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({bkg1}) => bkg1});
    }

    .testimonials-card:nth-child(2) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({bkg2}) => bkg2});
    }

    .testimonials-card:nth-child(3) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({bkg3}) => bkg3});
    }

    .testimonials-card:nth-child(3) .testimonials-card--back p{
      font-size: var(--font-size-footer-up-down);
     }

    .testimonials-card:nth-child(4) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({bkg4}) => bkg4});
    }

    .testimonials-card:nth-child(4) .testimonials-card--back p{
    font-size: var(--font-size-footer-up-down);
    }

    .testimonials-card--back {
    /*this prop using 'rotateY'  is related with 'backface-visibility: hidden;'*/
    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    transform: perspective(100rem) rotateY(0.5turn);
    background-color: var(--color-secondary); 
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect - 0.5turn = 180deg**/
    .testimonials-card:hover .testimonials-card--front{
    transform: perspective(100rem) rotateY(0.5turn);
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    .testimonials-card:hover .testimonials-card--back{
    transform: perspective(100rem) rotateY(1turn);
    }

    @media screen and (max-width:600px){
        .testimonials-card:nth-child(3) .testimonials-card--back p,
        .testimonials-card:nth-child(4) .testimonials-card--back p{
            font-size: var(--font-size-para);
        }
    }
`

export default OurProcess;