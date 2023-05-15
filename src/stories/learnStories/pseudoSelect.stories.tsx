import { useState, useRef } from 'react'
import { action } from '@storybook/addon-actions'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function BasicSelect() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

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

const PseudoSelect = ({ value, onChange, items }: SelectPropsType) => {
    const [age, setAge] = useState('select something');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">select something</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    {items.map(el => (
                        // <p key={el.value} onClick={() => { onChange(el.title) }}>{el.title}</p>
                        <MenuItem value={el.title}>{el.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
        // <div>
        //     <p onClick={x=>x}>{value}</p>
        //     <div>
        //         {items.map(el => (
        //             <p key={el.value} onClick={() => { onChange(el.title) }}>{el.title}</p>
        //         ))}
        //     </div>
        // </div>
    )
}

const actionCallback = action('this message from the storybook')

const items = [
    { title: 'floor', value: '1' },
    { title: 'door', value: '2' },
]

export function SelectTest() {
    const [v, setV] = useState('select title');
    // return <Select value={v} onChange={actionCallback} items={items} />
    return <PseudoSelect value={v} onChange={setV} items={items} />
}