import React, { useContext } from "react";
import { aboutUsData, backgroundsImages, brandIcons, cloIcons, contactInfo, DailyPhrases, leftquote, MainMessage, mainNavLinks, myWorkIcons, organizationBkgImages, ourProcessIcons, servicesData, testData } from "./data";


export const CloContext = React.createContext()

export const CloProvider = ({ children }) => {

    return(
        <CloContext.Provider 
            value={{
                mainNavLinks,
                DailyPhrases,
                MainMessage,
                cloIcons,
                leftquote,
                aboutUsData,
                backgroundsImages,
                testData,
                ourProcessIcons,
                organizationBkgImages,
                servicesData,
                myWorkIcons,
                brandIcons,
                contactInfo
             }}>
            {children}
        </CloContext.Provider>
    )
}

export const useCloContext = () => {
    return useContext(CloContext)
}


