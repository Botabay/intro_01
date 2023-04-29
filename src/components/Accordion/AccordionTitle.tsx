import { Dispatch,SetStateAction } from "react"
type propsType={
    title: string
    onClick:()=>void
}
export function AccordionTitle(props:propsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}