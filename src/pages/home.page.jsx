import React from "react";
import { EventsComponent, FeaturesComponent, OurProcess, WorkPreview } from '../components/index.components'


/**vlv-villages version 1 - HomePage - Features:
 * 
 *   --> Building 'HomePage' Page.
 * 
 * Note: First page page component
 */

const HomePage = () => {

    return(
        <>


                <EventsComponent />
                <OurProcess /> 
                <FeaturesComponent />
                <WorkPreview />                
                
            
        </>
    )
}

export default HomePage;