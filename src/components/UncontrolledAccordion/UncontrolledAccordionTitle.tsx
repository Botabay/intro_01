type propsType={
    title: string
}
export function UncontrolledAccordionTitle(props:propsType) {
    return (
        <h3>{props.title}</h3>
    )
}