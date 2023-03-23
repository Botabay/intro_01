import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export function Accordion({title='menu', itemsCount = 1}) {
    return (
        <div>
            <AccordionTitle title={title}/>
            <AccordionBody itemsCount={itemsCount}/>
        </div>
    )
}

