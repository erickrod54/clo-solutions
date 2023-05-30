import React, { useContext } from "react";
import { aboutUsData, backgroundsImages, cloIcons, DailyPhrases, leftquote, MainMessage, mainNavLinks, organizationBkgImages, ourProcessIcons, servicesData, testData } from "./data";


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
                servicesData
             }}>
            {children}
        </CloContext.Provider>
    )
}

export const useCloContext = () => {
    return useContext(CloContext)
}


