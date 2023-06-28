import React from "react";
import { Link } from "react-router-dom";
import { useCloContext } from "../context";

const EventsContent = () => {

    const { aboutUsData } = useCloContext();
    //console.log(' aboutUsData ==>', aboutUsData);

    const aboutUsText = aboutUsData[0].text;
    const aboutUsTextSlice = aboutUsText.slice(0,361);
    //const aboutUsTextLength = aboutUsText.length;
    const aboutUsTextSliceFinal = aboutUsText.slice(1055,1400);

    //console.log(' aboutUsTextLength ==>', aboutUsTextLength);

    //log(' this is only the text ==>', aboutUsText);


    return(
        <section id="events-content">
            <div className="events-content-para">
                <p>{aboutUsTextSlice} ,  {aboutUsTextSliceFinal}</p>
                    <Link to='/about-us' className="main-button">
                        <p>About us</p>
                    </Link>
            </div>
        </section>
    )
}

export default EventsContent;