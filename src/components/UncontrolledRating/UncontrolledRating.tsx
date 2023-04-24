import { UncontrolledStar } from "./UncontrolledStar";
import { useState } from "react";
type propsType = {
    // starCount:number
}
export function UncontrolledRating(props: propsType) {
    const [starCountSt, setStarCountSt] = useState<number>(3);
    console.log('rendering');
    
    return (
        <div>
            <div>
                <UncontrolledStar filled={starCountSt>=1}  callback={setStarCountSt} key1={1} />
                <UncontrolledStar filled={starCountSt>=2}  callback={setStarCountSt} key1={2} />
                <UncontrolledStar filled={starCountSt>=3}  callback={setStarCountSt} key1={3} />
                <UncontrolledStar filled={starCountSt>=4}  callback={setStarCountSt} key1={4} />
                <UncontrolledStar filled={starCountSt>=5}  callback={setStarCountSt} key1={5} />
            </div>
        </div>
    )
}

