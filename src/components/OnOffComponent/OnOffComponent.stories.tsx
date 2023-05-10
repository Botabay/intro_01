import React, { useState } from "react";
import { OnOffComponent } from "./OnOffComponent";
import {action} from '@storybook/addon-actions'

export default {
    title: ' OnOffComponent stories',
    component: OnOffComponent
}
const f=action('click')
export const OnMode1 = () => <OnOffComponent turnedOn={true} callback={f}/>
export const OffMode1 = () => <OnOffComponent turnedOn={false} callback={f}/>

export const OnMode = () => <OnOffComponent turnedOn={true} callback={x=>x}/>
export const OffMode = () => <OnOffComponent turnedOn={false} callback={x=>x}/>

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <OnOffComponent turnedOn={r} callback={setR}/>
}