import React from "react";

/**vlv-villages version 1.04 - HeaderComponent -
 * Features:
 * 
 *   --> Building navigation for header Component.
 * 
 *   --> testing the context.
 * 
 * Note: Pending to make it dynamic by implementing
 * an array with the links, and set the background 
 * image 'hero'
 */

const HeaderComponent = () => {
    

    return(
        <header id="header">
            <nav className="header_main-nav">
                <input type='checkbox' />
                <div className="header_main-nav--hamburger" ><div></div></div>
                <div className="header_main-nav--menu">
                    <div>
                        <div>
                            <ul>
                                <li>home</li>
                            </ul>
                            <ul>
                                <li>Services and pricing</li>
                            </ul>
                            <ul>
                                <li>About us</li>
                            </ul>
                            <ul>
                                <li>contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;