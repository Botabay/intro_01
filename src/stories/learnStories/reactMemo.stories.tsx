import React, { MouseEvent, memo, useState, } from "react"

export default {
    title: 'learn/sample of reactMemo'
}

const Counter1 = ({ v, onClick }: { v: number, onClick: (e: MouseEvent<HTMLButtonElement>) => void }) => {
    console.log('1');//for watching a rendering
    return (
        <div>
            <span>{v}</span><button onClick={onClick}>+</button>
        </div>
    )
}
const Counter2 = ({ v, onClick }: { v: number, onClick: (e: MouseEvent<HTMLButtonElement>) => void }) => {
    console.log('2');//for watching a rendering
    
    return (
        <div>
            <span>{v}</span><button onClick={onClick}>+</button>
        </div>
    )
}
const NewCounter=memo(Counter2, (prevProps, nextProps) => {
    /* compare prevProps and nextProps */
    return prevProps.v === nextProps.v;
  }); // reactmemo does not work(rendering anyway) without a props compare

export const ReactMemoSample = () => {
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);
    return (
        <div>
            <Counter1 v={a} onClick={(e: MouseEvent<HTMLButtonElement>) => { seta(a+1) }} />
            <NewCounter v={b} onClick={(e: MouseEvent<HTMLButtonElement>) => { setb(b+1) }} />
        </div>
    )
}
