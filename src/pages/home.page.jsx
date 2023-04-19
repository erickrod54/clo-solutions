import React from "react";
import { HeaderComponent, EventsComponent, FeaturesComponent, VillasComponent, FooterComponent } from '../components/index.components'

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
                <FeaturesComponent />
                <VillasComponent />               
                <FooterComponent />
            </div>
        </>
    )
}

export default HomePage;