import {Star} from "./Star";

export function Rating({starCount=0}) {
    let arr: boolean[]=[];
    for (let i=0; i<5; i++){
        if (i<starCount) {
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

