import { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
export default {
    title: 'learn/learn useEffect'
}

/**
 * 
 * useEffect like sipmle
 */

const functionWithHardCalculations = (): number => {
    console.log('functionWithHardCalculations is rendered')
    return 1000
}

export const Component = () => {
    const [value, setValue] = useState<number>(functionWithHardCalculations)
    useEffect(()=>{
        console.log('useEffect is worked');
        
    })
    return <>
        <button onClick={() => setValue(value + 1)}>{value}</button>
    </>
}
