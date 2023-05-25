import React, { useMemo, useState, memo } from "react"

export default {
    title: 'learn/sample of useMemo'
}

export const UseMemoLikeDifficultCalculating = () => {
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

const Arr = ({ a }: { a: number[] }) => {
    console.log('arr rendered')
    return <div>{a.map(el => <p>{el}</p>)}</div>
}

export const UseMemoLikeHelperForReactmemo = () => {//does not work
    const [s, sets] = useState(10);

    const f = (n: number): number => {

        console.log('calc');

        let i;
        for (i = 0; i < n; i++) { let b; b = i + i - i * i + 5; }
        return i
    }

    const res = useMemo(() => f(1000000000), [])
    const MemoArr = memo(Arr, (p, n) => p.a === n.a)

    console.log('render');

    return (

        <div>
            <button onClick={() => sets(res + 1)}>+</button>
            <button onClick={() => sets(res - 1)}>-</button>
            {res} + {s}
            <MemoArr a={[1, 2, 3]} />
        </div>
    )
}

//variant1 works on reactMemo
//var2 does not work on reactMemo(reason filter on array)
//var3 work3 on reactMemo+useMemo(useMemo used on filter on array)
const UserSecret = ({ users }: { users: string[] }) => {
    console.log('UserSecret is rendered');
    return <div>{users.map(el => <p>{el}</p>)}</div>
}

const Users = memo(UserSecret);

export const UseMemoLikeHelperForReactmemoByDimych1 = () => {
    const [s, setS] = useState(0);
    const [users, setUsers] = useState(['a', 'b', 'c']);
    console.log('UseMemoLikeHelperForReactmemo is rendered')
    return <>
        <button onClick={() => setS(s + 1)}>+</button>
        {s}
        <Users users={users} />
    </>
}

export const UseMemoLikeHelperForReactmemoByDimych2 = () => {
    const [s, setS] = useState(0);
    const [users, setUsers] = useState(['a', 'b', 'c']);
    console.log('UseMemoLikeHelperForReactmemo is rendered')
    return <>
        <button onClick={() => setS(s + 1)}>+</button>
        {s}
        <Users users={users.filter(el => true)} />
    </>
}

export const UseMemoLikeHelperForReactmemoByDimych3 = () => {
    const [s, setS] = useState(0);
    const [users, setUsers] = useState(['a', 'b', 'c']);
    console.log('UseMemoLikeHelperForReactmemo is rendered')
    const memoUsers = useMemo(() => users.filter(el => true), [users])
    return <>
        <button onClick={() => setS(s + 1)}>+</button>
        {s}
        <Users users={memoUsers} />
    </>
}