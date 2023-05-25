import React, { useState, useCallback } from 'react';

export default {
    title: 'learn/sample of useCallbak'
}

export const ParentComponent = () => { //does not work
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // Объявляем функцию handleClick с помощью useCallback
    const handleClick = useCallback(() => {
        return setCount(count + 1);
    }, [count]);

    console.log('ParentComponent is rendered',handleClick);

    return (
        <div>
            <button onClick={()=>setCount2(count2+1)}>{count2}</button>
            <p>You clicked {count} times</p>
            {/* Передаем handleClick как пропс в дочерний компонент */}
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}

const ChildComponent = ({ handleClick }: { handleClick: any }) => {
    console.log('ChildComponent is rendered');

    return (
        <button onClick={handleClick}>Click me!</button>
    );
}
/**
 * В этом примере мы используем useCallback, чтобы объявить функцию handleClick, которая увеличивает значение count на 1 при каждом клике на кнопку. Мы передаем эту функцию компоненту ChildComponent как пропс, чтобы обработать нажатие на кнопку.

Таким образом, при изменении значения count будет пересчитываться только колбэк-функция handleClick, а не сам компонент ChildComponent, что позволяет избежать лишних рендеров дочернего компонента и повышает производительность нашего приложения.
 */

const UserSecret = ({ addUser,users }: {addUser: ()=>void,users:string[] }) => {
    console.log('UserSecret is rendered');

    return <div>{users.map(el => <p>{el}</p>)}</div>
}




export const UseMemoLikeHelperForReactmemoByDimych3 = () => {//does not work
    const [s, setS] = useState(0);
    const [users, setUsers] = useState(['a', 'b', 'c']);
    const useCallbakcUsers = useCallback(()=>setUsers(users),[users]);
    console.log('UseMemoLikeHelperForReactmemo is rendered')
    // const memoUsers = useMemo(() => users.filter(el => true), [users])
    return <>
        <button onClick={() => setS(s + 1)}>+</button>
        {s}
        <UserSecret addUser={useCallbakcUsers} users={users}/>
    </>
}

