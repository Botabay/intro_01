type propsType = {
    itemsCount: number;
    collapsed: boolean
}

export function UncontrolledAccordionBody(props: propsType) {
    const arr: string[] = ['el1,el2'];
    for (let i = 1; i <= props.itemsCount; i++) {
        arr.push('item' + i);
    }
    if (props.collapsed) return <></>;
    else return (
        <div>
            <ul>
                {arr.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            <button>to collapse</button>
        </div>
    )
}