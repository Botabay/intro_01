import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";
import { useState, Dispatch, SetStateAction } from "react";
export type itemType = {
    title: string
    value: any
}
type propsType = {
    title: string,
    // itemsCount:number,
    collapsed: boolean
    setOnSt: Dispatch<SetStateAction<boolean>>
    items: itemType[]
    onClick:(v:any)=>void
}
export function Accordion(props: propsType) {
    const [collapsedSt, setCollapsedSt] = useState(props.collapsed);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.setOnSt(!collapsedSt)} />
            {/* {!props.collapsed && <AccordionBody itemsCount={props.itemsCount} }*/}
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </div>
    )
}

