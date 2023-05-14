import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import { useState, Dispatch, SetStateAction } from "react";
type propsType={
    title:string,
    // itemsCount:number,
    collapsed:boolean
    setOnSt: Dispatch<SetStateAction<boolean>>
    items: string[]
}
export function Accordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(props.collapsed);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>props.setOnSt(!collapsedSt)}/>
            {/* {!props.collapsed && <AccordionBody itemsCount={props.itemsCount} }*/}
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}

