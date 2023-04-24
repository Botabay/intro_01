type propsType={
    title: string
}
export function UncontrolledAccordionTitle(props:propsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}