type propsType = {
    itemsCount: number;
    collapsed: boolean
}

export function UncontrolledAccordionBody(props: propsType) {
    const arr: string[] = [];
    for (let i = 1; i <= props.itemsCount; i++) {
        arr.push('item' + i);
    }
    if (props.collapsed) return <></>;
    else return (
        <div>
            <ul>
                {arr.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
        </div>
    )
}