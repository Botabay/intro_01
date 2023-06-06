import { useState, } from 'react'
import { action } from '@storybook/addon-actions'
export default {
    title: 'learn/learn advancedUseState'
}

/**
 * 
 * advanced UseState:
 * like initialValue=functionWithHardCalculations
 * like callback
 */

const functionWithHardCalculations = (): number => {
    console.log('functionWithHardCalculations is rendered')
    return 1000
}

export const ComponentVariantA = () => {
    const [value, setValue] = useState<number>(functionWithHardCalculations)
    return <>
        <button onClick={() => setValue(value + 1)}>{value}</button>
    </>
}

export const ComponentVariantB = () => {
    const [value, setValue] = useState<number>(functionWithHardCalculations)
    return <>
        <button onClick={() => setValue(value=>value + 1)}>{value}</button>
    </>
}
