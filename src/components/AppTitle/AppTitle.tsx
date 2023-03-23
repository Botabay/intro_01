type propsType={
    text:string
}
export function AppTitle(props: propsType) {
    return (
        <>{props.text}</>
    )
}