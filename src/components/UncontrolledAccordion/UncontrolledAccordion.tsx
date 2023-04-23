import { useState } from "react";
import { UncontrolledAccordionTitle } from "./UncontrolledAccordionTitle";
import { UncontrolledAccordionBody } from "./UncontrolledAccordionBody";

type propsType={
    title:string,
    itemsCount:number,
    // collapsed: boolean
}
export function UncontrolledAccordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(true)
    return (
        <div>
            <UncontrolledAccordionTitle title={props.title}/>
            <UncontrolledAccordionBody itemsCount={props.itemsCount} collapsed={collapsedSt}/>
        </div>
    )
}

