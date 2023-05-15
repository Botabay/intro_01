import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { action } from '@storybook/addon-actions'

export default {
    title: ' Accordion stories',
    component: Accordion
}
// type propsType={
//     title:string,
//     itemsCount:number,
//     collapsed: boolean
// }
// // const f=action('click')
// export const OnMode1 = () => <OnOffComponent turnedOn={true} callback={f}/>
// export const OffMode1 = () => <OnOffComponent turnedOn={false} callback={f}/>

const onClickAction = action('the item was clicked')

export const CollapsedMode = () =>
    <Accordion title={'collapsed mode'} items={[]} collapsed={true} setOnSt={() => { }} onClick={onClickAction} />
export const UncollapsedMode = () =>
    <Accordion title={'uncollapsed mode'} items={[{ title: 'aa', value: 1 }, { title: 'bb', value: 2 }, { title: 'cc', value: 3 }]}
        collapsed={false} setOnSt={() => { }} onClick={onClickAction} />

export const ToChangeMode = () => {
    const [r, setR] = useState<boolean>(true);
    return <Accordion title={'change mode'} items={[{ title: 'aa', value: 1 }, { title: 'bb', value: 2 }, { title: 'cc', value: 3 }]}
        collapsed={r} setOnSt={() => setR(!r)} onClick={onClickAction}/>
}