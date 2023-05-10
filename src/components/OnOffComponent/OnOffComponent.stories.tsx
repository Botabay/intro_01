import React, { useState } from "react";
import { OnOffComponent } from "./OnOffComponent";

export default {
    title: ' OnOffComponent stories',
    component: OnOffComponent
}

export const OnMode = () => <OnOffComponent turnedOn={true} callback={x=>x}/>
export const OffMode = () => <OnOffComponent turnedOn={false} callback={x=>x}/>

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <OnOffComponent turnedOn={r} callback={setR}/>
}