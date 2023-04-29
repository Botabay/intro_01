type propsType={
    title: string
    onClick:()=>void
}
export function UncontrolledAccordionTitle(props:propsType) {
    return (
        // <div>
        //     <h3>{props.title}</h3>
        // </div>        
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}