export default {
    title: 'learn/template'
}

const obj = {
    value: 'ere'
}

export const Parent = () => <Child value={obj.value} />

const Child = ({ value }: { value: string }) => <input value={value} />