export default {
    title: 'learn/PseudoSelect stories',
    // component: Accordion
}

type ItemType={
    title:string
    value:any
}

type SelectPropsType = {
    value:any
    onChange: (v:any)=>void
    items:ItemType[]
}

const Select=({value,onChange,items}:SelectPropsType)=>{
    return (
        <div>
            <p>{value}</p>
            <div>
                {items.map(el=>(
                    <p key={el.value} onClick={()=>{onChange(el.title)}}>{el.title}</p>
                ))}
            </div>
        </div>
    )
}

export function SelectTest(){
    return <Select value={'select title'} onChange={()=>console.log('ddd')} items={[{title:'option',value:22}]}/>
}