import { Dispatch,SetStateAction } from "react"
type propsType={
    filled:boolean
    callback:Dispatch<SetStateAction<0|1|2|3|4|5>>
    key1:0|1|2|3|4|5
}
export function UncontrolledStar(props:propsType) {
    const style={color:'red'}
    // if (props.filled) {
    //     return <span onClick={()=>props.callback(props.key1)} style={style}>star</span>
    // }
    //     return <span onClick={()=>props.callback(props.key1)} style={ {} }> star </span>
    return <span onClick={()=>props.callback(props.key1)} style={props.filled?style:{}}> star </span>
}