type propsType={
    filled:boolean
}
export function UncontrolledStar(props:propsType) {
    if (props.filled) {
        return <span><b> star </b></span>
    }
    return <span> star </span>
}