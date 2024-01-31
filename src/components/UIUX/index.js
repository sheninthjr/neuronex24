import React from "react";

import { Wrapper } from "./modely.style";

import Section from "../Section";
import Header from "../Header";

const UIUX = () =>{

    document.title = "UI | UX";
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="UI | UX" 
                backgroundImg="ui.png"
            />
        </Wrapper>
    )
}

export default UIUX;