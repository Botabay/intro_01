type propsType = {
    itemsCount: number;
}

export function AccordionBody(props: propsType) {
    const arr: string[] = [];
    for (let i = 1; i <= props.itemsCount; i++) {
        arr.push('item' + i);
    }
    return (
        <ul>
            {arr.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
    )
}