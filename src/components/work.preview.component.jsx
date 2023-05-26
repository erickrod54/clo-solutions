import React from "react";
import styled from "styled-components";
import { useCloContext } from "../context";


const WorkPreview = () => {

    const { organizationBkgImages } = useCloContext();

    console.log('organizationBkgImages ==> ', organizationBkgImages)

    const closetbefore = organizationBkgImages[0].imagesfrontbkg;
    const closetafter = organizationBkgImages[0].imagesbackbkg;
    const hamperbefore = organizationBkgImages[1].imagesfrontbkg;
    const hamperafter = organizationBkgImages[1].imagesbackbkg;
    const kitchendrawerbefore = organizationBkgImages[2].imagesfrontbkg;
    const kitchendrawerafter = organizationBkgImages[2].imagesbackbkg;
    const kitchencabinetsbefore = organizationBkgImages[3].imagesfrontbkg;
    const kitchencabinetsafter = organizationBkgImages[3].imagesbackbkg;
    const wardrobebefore = organizationBkgImages[4].imagesfrontbkg;
    const wardrobeafter = organizationBkgImages[4].imagesbackbkg;

    return(
        <WorkPreviewWrapper id="work-preview" 
            closetbefore={closetbefore} 
            closetafter={closetafter} 
            hamperbefore={hamperbefore} 
            hamperafter={hamperafter} 
            kitchendrawerbefore={kitchendrawerbefore} 
            kitchendrawerafter={kitchendrawerafter} 
            kitchencabinetsbefore={kitchencabinetsbefore} 
            kitchencabinetsafter={kitchencabinetsafter}
            wardrobebefore={wardrobebefore}
            wardrobeafter={wardrobeafter}>
            
        {organizationBkgImages.filter( (card) => card.id <= 4).map((card) => {
            const { id, title, titleback } = card
            return(
                <div key={id} className="testimonials-card">
                <div className="testimonials-card--front">
                    <h2 className="testimonials-card--title">{title}</h2>
                </div>
                <div className="testimonials-card--back">
                    <h2 className="testimonials-card--title">{titleback}</h2>
                </div>
            </div>
            )
        })}
    </WorkPreviewWrapper>

        /**
         * <section id="ourprocess">
            <h2>Our process section</h2>
        </section>
         */
    )
}

const WorkPreviewWrapper = styled.section`
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

    display: grid;
    justify-items: center;
    align-items: start;
    padding: 3rem;
    }

    .testimonials-card--front h2,
    .testimonials-card--back h2{
    background-color: var(--color-secondary-light);
    font-size: 1.2rem;
    padding: 1rem;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    .testimonials-card--back p{
    place-self: center;
    font-size: 2rem;
    font-weight: 400;
    }

    .testimonials-card:first-child .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({closetbefore}) => closetbefore});
    }

    .testimonials-card:first-child .testimonials-card--back{
        content: "";
        background-image: url(${({closetafter}) => closetafter});
    }

    .testimonials-card:nth-child(2) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({hamperbefore}) => hamperbefore});
    }

    .testimonials-card:nth-child(2) .testimonials-card--back{
        content: "";
        background-image: url(${({hamperafter}) => hamperafter});
    }

    .testimonials-card:nth-child(3) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({kitchendrawerbefore}) => kitchendrawerbefore});
    }

    .testimonials-card:nth-child(3) .testimonials-card--back{
        content: "";
        background-image: url(${({kitchendrawerafter}) => kitchendrawerafter});
    }
    

    .testimonials-card:nth-child(4) .testimonials-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({kitchencabinetsbefore}) => kitchencabinetsbefore});
    }

    .testimonials-card:nth-child(4) .testimonials-card--back{
        content: "";
        background-image: url(${({kitchencabinetsafter}) => kitchencabinetsafter});
    }

    .testimonials-card--back {
    /*this prop using 'rotateY'  is related with 'backface-visibility: hidden;'*/
    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    transform: perspective(100rem) rotateY(0.5turn); 
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect - 0.5turn = 180deg**/
    .testimonials-card:hover .testimonials-card--front{
    transform: perspective(100rem) rotateY(0.5turn);
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    .testimonials-card:hover .testimonials-card--back{
    transform: perspective(100rem) rotateY(1turn);
    }
`

export default WorkPreview;