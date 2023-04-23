import {UncontrolledStar} from "./UncontrolledStar";
type propsType={
    // starCount:number
}
export function UncontrolledRating(props:propsType) {
    let arr: boolean[]=[];
    for (let i=0; i<5; i++){
        if (i<props.starCount) {
            arr.push(true);
            continue;
        }
        arr.push(false)
    }
    return (
        <div>
            {arr.map((el, index)=><UncontrolledStar filled={el} key={index}/>)}
        </div>
    )
}

