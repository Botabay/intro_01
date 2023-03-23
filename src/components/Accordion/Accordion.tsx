import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type propsType={
    title:string,
    itemsCount:number,
    collapsed: boolean
}
export function Accordion(props: propsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody itemsCount={props.itemsCount} collapsed={props.collapsed}/>
        </div>
    )
}

