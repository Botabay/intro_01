import {Star} from "./Star";
type propsType={
    starCount:number
}
export function Rating(props:propsType) {
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
            {arr.map((el, index)=><Star filled={el} key={index}/>)}
        </div>
    )
}

