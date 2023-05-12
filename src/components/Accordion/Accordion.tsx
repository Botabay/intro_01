import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import { useState, Dispatch, SetStateAction } from "react";
type propsType={
    title:string,
    itemsCount:number,
    collapsed:boolean
    setOnSt: Dispatch<SetStateAction<boolean>>
}
export function Accordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(true);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>props.setOnSt(false)}/>
            {!props.collapsed && <AccordionBody itemsCount={props.itemsCount} />}
        </div>
    )
}

