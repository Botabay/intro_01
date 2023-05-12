import React, { useState } from "react";
import { UncontrolledInlineCssOnOffComponent } from "./UncontrolledInlineCssOnOffComponent";
import {action} from '@storybook/addon-actions'

export default {
    title: ' UncontrolledInlineCssOnOffComponent stories',
    component: UncontrolledInlineCssOnOffComponent
}

export const OnMode = () => <UncontrolledInlineCssOnOffComponent defaultMode={true} callback={()=>{}}/>
export const OffMode = () => <UncontrolledInlineCssOnOffComponent defaultMode={false} callback={()=>{}}/>

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <UncontrolledInlineCssOnOffComponent turnedOn={r} callback={setR}/>
}