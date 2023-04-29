import {Star} from "./Star";
export type ratingValueType=0|1|2|3|4|5
type propsType={
    starCount:ratingValueType
    onClick:(u:ratingValueType)=>void
}
export function Rating(props:propsType) {
    return (
        <div>
           {/* <Star filled={props.starCount>0} onClick={props.onClick} starCount={1} />
           <Star filled={props.starCount>1} onClick={props.onClick} starCount={2} />
           <Star filled={props.starCount>2} onClick={props.onClick} starCount={3} />
           <Star filled={props.starCount>3} onClick={props.onClick} starCount={4} />
           <Star filled={props.starCount>4} onClick={props.onClick} starCount={5} /> */}
           <Star filled={props.starCount>0} onClick={()=>props.onClick(1)}  />
           <Star filled={props.starCount>1} onClick={()=>props.onClick(2)}  />
           <Star filled={props.starCount>2} onClick={()=>props.onClick(3)}  />
           <Star filled={props.starCount>3} onClick={()=>props.onClick(4)}  />
           <Star filled={props.starCount>4} onClick={()=>props.onClick(5)}  />
        </div>
    )
}



// export function Rating(props:propsType) {
//     let arr: boolean[]=[];
//     for (let i=0; i<5; i++){
//         if (i<props.starCount) {
//             arr.push(true);
//             continue;
//         }
//         arr.push(false)
//     }
//     // props.onClick(props.starCount)
//     return (
//         <div>
//             {arr.map((el, index)=><Star filled={el} key={index}
//                 onClick={()=>props.onClick(index)}
//             />)}
//         </div>
//     )
// }

