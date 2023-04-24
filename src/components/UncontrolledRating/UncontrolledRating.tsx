import {UncontrolledStar} from "./UncontrolledStar";
import { useState } from "react";
type propsType={
    // starCount:number
}
export function UncontrolledRating(props:propsType) {
    const arr: boolean[]=[];
    const [starCountSt,setStarCountSt]=useState<number>(3);

    for (let i=0; i<5; i++){
        if (i<starCountSt) {            
            arr.push(true);
            continue;
        }
        arr.push(false)
    }
    return (
        <div>
            {arr.map((el, index)=>{
                    return (
                        <div>
                            <UncontrolledStar filled={el} key={index}/><button onClick={()=>setStarCountSt(index+1)}>to vote {index+1}</button>
                        </div>
                    )
                }                
            )}
        </div>
    )
}

