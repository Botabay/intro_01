import { useState } from "react";
import { UncontrolledAccordionTitle } from "./UncontrolledAccordionTitle";
import { UncontrolledAccordionBody } from "./UncontrolledAccordionBody";

type propsType={
    title:string,
    itemsCount:number
}
export function UncontrolledAccordion(props: propsType) {
    const [collapsedSt,setCollapsedSt]=useState(true);
    const style={
        border:'1px solid red',
        width: '300px'
    }
    return (
        <div style={style}>
            <UncontrolledAccordionTitle title={props.title} onClick={()=>{setCollapsedSt(!collapsedSt)}}/>
              {/* <button onClick={()=>{setCollapsedSt(!collapsedSt)}}>toggle UncontrolledAccordion</button> */}
            <UncontrolledAccordionBody itemsCount={props.itemsCount} collapsed={collapsedSt}/>
        </div>
    )
}

