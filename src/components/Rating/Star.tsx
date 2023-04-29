import {ratingValueType} from './Rating'
type propsType={
    filled:boolean
    // starCount:ratingValueType
    // onClick:(u:ratingValueType)=>void
    onClick:()=>void
}
export function Star(props:propsType) {
    // if (props.filled) {
    //     return <span><b> star </b></span>
    // }
    // return <span> star </span>
    
    return <span onClick={props.onClick}>{props.filled?<b> star </b>:'star'}</span>
}