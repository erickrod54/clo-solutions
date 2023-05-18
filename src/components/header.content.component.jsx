import React from "react";
import { Link } from 'react-router-dom'; 
import { useCloContext } from "../context";
import { logocolor } from '../assets/index.assets';

//import { useVLVillagesContext } from "../context";

/**vlv-villages version 4.07 - HeaderContent -
 * Features:
 * 
 *   --> Destructuring 'HeaderData' from the context.
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderContent = () => {

    const { DailyPhrases, cloIcons } = useCloContext()
    //console.log('cloIcons data ==> ', cloIcons);

    const firstPhrase = DailyPhrases[0]
    const quoteleft = cloIcons[0].icon
    const quoteright = cloIcons[1].icon

    /**TESTING  */
    /**
     * function getRandomDailyPhrases(messages) {
      
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
      }
     */
      

    return(
    <div className="header_logo-content--content">
        <div className="header_logo-content--title">
            <img src={logocolor} className='header_logo-content--img' alt='logo color'/>
        </div>
        <div className="header_logo-content--quatation-container">
            <i>
                {quoteleft}
            </i>
        <p className="header_logo-content--para">{firstPhrase}</p>
            <i>
                {quoteright}
            </i>
        </div>
        <Link to='#' className="header_logo-content--link">check out our services</Link>
    </div>     
    )
}

export default HeaderContent;