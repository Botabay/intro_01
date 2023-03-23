type propsType={
    title: string
}
export function AccordionTitle(props:propsType) {
    return (
        <h3>{props.title}</h3>
    )
}