import React, { useState } from "react";
import { UncontrolledAccordion } from "./UncontrolledAccordion";
import { action } from '@storybook/addon-actions'

export default {
    title: ' UncontrolledAccordion stories',
    component: UncontrolledAccordion
}
// type propsType={
//     title:string,
//     itemsCount:number,
//     collapsed: boolean
// }
// // const f=action('click')
// export const OnMode1 = () => <OnOffComponent turnedOn={true} callback={f}/>
// export const OffMode1 = () => <OnOffComponent turnedOn={false} callback={f}/>

export const CollapsedMode = () =>
    // <UncontrolledAccordion title={'collapsed mode'} itemsCount={2} collapsed={true} setOnSt={()=>{}}/>
    <UncontrolledAccordion title={'collapsed mode'} itemsCount={2}/>
export const UncollapsedMode = () =>
    <UncontrolledAccordion title={'uncollapsed mode'} itemsCount={2}/>

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <UncontrolledAccordion title={'change mode'} itemsCount={2}/>
}