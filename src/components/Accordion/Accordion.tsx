import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import { useState } from "react";
type propsType={
    title:string,
    itemsCount:number,
    collapsed: boolean
}
export function Accordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(true);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>setCollapsedSt(!collapsedSt)}/>
            {props.collapsed && <AccordionBody itemsCount={props.itemsCount} />}
        </div>
    )
}

