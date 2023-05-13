import { useState, useRef } from 'react'
import { action } from '@storybook/addon-actions'
export default {
    title: 'learn input'
}

/**
 * 
 * uncontrolled input is not good thing for any project
 */
export const UncontrolledInput = () => <input />

export const ControlledInputWithFixedValue = () => <input value={'ControlledInputWithFixedValue'} />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <>
        <input value={value} onChange={(e) => {
            setValue(e.currentTarget.value)
        }} /> {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)
    return <>
        <input ref={ref} />
        <button onClick={() => { setValue(ref.current ? ref.current.value : '') }}>get inputValue</button>
        {value}
    </>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    // return <input value={parentValue} onChange={action('dfdd')}/>
    return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)} />
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    return <input type='checkbox' checked={parentValue} onChange={(e) =>
        setParentValue(e.currentTarget.checked)} />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    return <select value={parentValue} onChange={(e) =>
        setParentValue(e.currentTarget.value)}>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
    </select>
}
