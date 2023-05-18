import React from "react";
import { Link } from 'react-router-dom';

/**pending to set react-router dom, that way 
 * i can use Link ( cannot be use alone, because
 * needs others router components ), 
 */

const LogoComponent = () => {

    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link to="#" className="header_logo-content--logo" alt='header_logo-content--logo'>
                    <span>C</span><span>L</span><span>O</span>solutions
        </Link>
    )
}

export default LogoComponent;