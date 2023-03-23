export function AccordionBody({itemsCount = 1}) {
    const arr: string[]=[];
    for (let i=1; i<=itemsCount; i++){
        arr.push('item'+i);
    }
    return (
        <ul>
            {arr.map((el,index)=><li key={index}>{el}</li>)}
        </ul>
    )
}