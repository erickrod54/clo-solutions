import React from "react";
import styled from "styled-components";
import Maintitle from "../components/main.title.component";
import { useCloContext } from "../context";

/**
 * Release Candidate Clo Solutions organization services - work preview page
 * - Features:
 * 
 * 
 *        --> Organization assets july 31 - 2023
 * 
 * Note: testing and uploading assets
 */


const WorkPreviewPage = () => {

    const { organizationBkgImages, myWorkIcons } = useCloContext();

    //console.log('myWorkIcons ==> ', myWorkIcons)
    console.log('organizationBkgImages in the page! ==> ', organizationBkgImages[5].imagesfrontbkg)

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
    const cabinetbefore1 = organizationBkgImages[5].imagesfrontbkg;
    const cabinetafter1 = organizationBkgImages[5].imagesbackbkg;

   /**test in the return -- image is comming <img src={cabinetbefore1} alt="cabinetbefore1"/> */

    /**icons */
    const handpointer = myWorkIcons[2].icon;

    return(
        <>
        
        <Maintitle title={<h2>Some of my work</h2>}/>
        <div className="work-preview-page--container">
            <WorkPreviewWrapper id="work-preview-page" 
                closetbefore={closetbefore} 
                closetafter={closetafter} 
                hamperbefore={hamperbefore} 
                hamperafter={hamperafter} 
                kitchendrawerbefore={kitchendrawerbefore} 
                kitchendrawerafter={kitchendrawerafter} 
                kitchencabinetsbefore={kitchencabinetsbefore} 
                kitchencabinetsafter={kitchencabinetsafter}
                wardrobebefore={wardrobebefore}
                wardrobeafter={wardrobeafter}
                cabinetbefore1={cabinetbefore1}
                cabinetafter1={cabinetafter1}
                > 
                
            {organizationBkgImages.map((card) => {
                const { id } = card
                return(
                    <div key={id} className="work-preview-page-card">
                    <div className="work-preview-page-card--front">
                        <h2><i>{handpointer}</i></h2>
                        {/**<h2 className="work-preview-page-card--title"><i>{wandmagicsparkles}</i>{title}</h2> */}
                    </div>
                    <div className="work-preview-page-card--back">
                         {/**<h2 className="work-preview-page-card--title"><i>{sparkles}</i>{titleback}</h2> */}
                    </div>
                </div>
                )
            })}
        </WorkPreviewWrapper>

        </div>
        </>
    )
}

const WorkPreviewWrapper = styled.section`

   .work-preview-page-card{
    width: 28rem;
    height: 50rem;
    position: relative;
    }

    .work-preview-page-card--front,
    .work-preview-page-card--back,
    .work-preview-page-card:first-child .work-preview-page-card--front::before,
    .work-preview-page-card:nth-child(2) .work-preview-page-card--front::before,
    .work-preview-page-card:nth-child(3) .work-preview-page-card--front::before,
    .work-preview-page-card:nth-child(4) .work-preview-page-card--front::before,
    .work-preview-page-card:nth-child(5) .work-preview-page-card--front::before,
    .work-preview-page-card:nth-child(6) .work-preview-page-card--front::before{
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

    .work-preview-page-card--front h2,
   .work-preview-page-card--back h2{
    background-color: var(--color-secondary-light);
    font-size: 1.2rem;
    padding: 1rem;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    .work-preview-page-card--front h2,
    .work-preview-page-card--back h2{
    background-color: var(--color-secondary-light);
    font-size: 1.2rem;
    padding: 2.5rem;
   
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    
    .work-preview-page-card--back h2{
    background-color: var(--color-sixth);
    font-size: 1.2rem;
    padding: 2.5rem;
    
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    }

    .work-preview-page-card--back .work-preview-page-card--title i{
        color: var(--color-secondary);
    }

    .work-preview-page-card--title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }

    .work-preview-page-card--title i {
        
        margin-right: 0.5rem; /* Adjust the spacing between the icon and title as needed */
        }



   .work-preview-page-card--back p{
    place-self: center;
    font-size: 2rem;
    font-weight: 400;
    }

    .work-preview-page-card:first-child .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({closetbefore}) => closetbefore});
    }

    .work-preview-page-card:first-child .work-preview-page-card--back{
        content: "";
        background-image: url(${({closetafter}) => closetafter});
    }

    .work-preview-page-card:nth-child(2) .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({hamperbefore}) => hamperbefore});
    }

    .work-preview-page-card:nth-child(2) .work-preview-page-card--back{
        content: "";
        background-image: url(${({hamperafter}) => hamperafter});
    }

    .work-preview-page-card:nth-child(3) .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({kitchendrawerbefore}) => kitchendrawerbefore});
    }

    .work-preview-page-card:nth-child(3) .work-preview-page-card--back{
        content: "";
        background-image: url(${({kitchendrawerafter}) => kitchendrawerafter});
    }
    

    .work-preview-page-card:nth-child(4) .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({kitchencabinetsbefore}) => kitchencabinetsbefore});
    }

    .work-preview-page-card:nth-child(4) .work-preview-page-card--back{
        content: "";
        background-image: url(${({kitchencabinetsafter}) => kitchencabinetsafter});
    }

    .work-preview-page-card:nth-child(5) .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({wardrobebefore}) => wardrobebefore});
    }

    .work-preview-page-card:nth-child(5) .work-preview-page-card--back{
        content: "";
        background-image: url(${({wardrobeafter}) => wardrobeafter});
    }

    .work-preview-page-card:nth-child(6) .work-preview-page-card--front::before{
        content: "";
        opacity: 0.5; /* Set the opacity of the background image */
        z-index: -1; /* Send the background image behind the text */
        background-image: url(${({cabinetbefore1}) => cabinetbefore1});
    }

    .work-preview-page-card:nth-child(6) .work-preview-page-card--back{
        content: "";
        background-image: url(${({cabinetafter1}) => cabinetafter1});
    }

    .work-preview-page-card--back {
    /*this prop using 'rotateY'  is related with 'backface-visibility: hidden;'*/
    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    transform: perspective(100rem) rotateY(0.5turn); 
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect - 0.5turn = 180deg**/
    .work-preview-page-card:hover .work-preview-page-card--front{
    transform: perspective(100rem) rotateY(0.5turn);
    }

    /*the 'perspective(100rem)' with hover will make the 3d effect**/
    .work-preview-page-card:hover .work-preview-page-card--back{
    transform: perspective(100rem) rotateY(1turn);
    }
`

export default WorkPreviewPage;