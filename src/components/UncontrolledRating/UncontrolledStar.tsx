import { Dispatch,SetStateAction } from "react"
type propsType={
    filled:boolean
    callback:Dispatch<SetStateAction<number>>
    key1:number
}
export function UncontrolledStar(props:propsType) {
    const style={color:'red'}
    if (props.filled) {
        return <span onClick={()=>props.callback(props.key1)} style={style}>star</span>
    }
    return <span onClick={()=>props.callback(props.key1)} style={ {} }> star </span>
}