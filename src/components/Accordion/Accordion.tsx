import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import { useState } from "react";
type propsType={
    title:string,
    itemsCount:number,
    collapsed:boolean
    onChange: ()=>void
}
export function Accordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(true);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>props.onChange()}/>
            {!props.collapsed && <AccordionBody itemsCount={props.itemsCount} />}
        </div>
    )
}

