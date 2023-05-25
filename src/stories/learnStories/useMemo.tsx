import React, { useMemo, useState, memo } from "react"

export default {
    title: 'learn/sample of useMemo'
}

export const UseMemoLikDifficultCalculating = () => {
    const [s, sets] = useState(10);

    const f = (n: number): number => {
        
        console.log('calc');

        let i;
        for (i = 0; i < n; i++) { let b; b = i + i - i * i + 5; }
        return i
    }

    const res = useMemo(() => f(1000000000), [])

    console.log('render');

    return (

        <div>
            <button onClick={() => sets(res + 1)}>+</button>
            <button onClick={() => sets(res - 1)}>-</button>
            {res} + {s}
        </div>
    )
}