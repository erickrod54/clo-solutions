import React from "react";
import { HeaderComponent, EventsComponent, FeaturesComponent, FooterComponent, OurProcess, WorkPreview } from '../components/index.components'

/**vlv-villages version 1 - HomePage - Features:
 * 
 *   --> Building 'HomePage' Page.
 * 
 * Note: First page page component
 */

const HomePage = () => {

    return(
        <>
            <div className="container">
                <HeaderComponent />
                <EventsComponent />
                <OurProcess />
                <FeaturesComponent />
                <WorkPreview />               
                <FooterComponent />
            </div>
        </>
    )
}

export default HomePage;