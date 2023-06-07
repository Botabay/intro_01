import { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
export default {
    title: 'learn/learn useEffect'
}

/**
 * 
 * useEffect like sipmle
 * useEffect at clock
 */

const functionWithHardCalculations = (): number => {
    console.log('functionWithHardCalculations is rendered')
    return 1000
}

export const Component = () => {
    const [value, setValue] = useState<number>(functionWithHardCalculations)
    useEffect(() => {
        console.log('useEffect is worked');
    })
    return <>
        <button onClick={() => setValue(value + 1)}>{value}</button>
    </>
}

export const Clock = () => {
    const [value, setValue] = useState(new Date())
    useEffect(() => {
        // setTimeout(()=>setValue(new Date()),1000)
        // при уходе из этой компоненты setInterval продолжает работать,
        // утечка памяти, поэтому нужно очистить через clearInterval
        const id = setInterval(() => {
            console.log('bad ticking');
            setValue(new Date());
            // clearInterval(id); here is it does not work
        }, 1000)
        return ()=>clearInterval(id);//good
    }, [])
    return <>
        <span>{value.getHours()}</span>
        :
        <span>{value.getMinutes()}</span>
        :
        <span>{value.getSeconds()}</span>
    </>
}