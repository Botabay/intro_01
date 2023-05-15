import { useState, useRef } from 'react'
import { action } from '@storybook/addon-actions'

export default {
    title: 'learn/PseudoSelect stories',
    // component: Accordion
}

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (v: any) => void
    items: ItemType[]
}

const Select = ({ value, onChange, items }: SelectPropsType) => {
    return (
        <div>
            <p>{value}</p>
            <div>
                {items.map(el => (
                    <p key={el.value} onClick={() => { onChange(el.title) }}>{el.title}</p>
                ))}
            </div>
        </div>
    )
}

const actionCallback=action('this message from the storybook')

const items = [
    { title: 'floor', value: '1' },
    { title: 'door', value: '2' },
]

export function SelectTest() {
    return <Select value={'select title'} onChange={actionCallback} items={items} />
}