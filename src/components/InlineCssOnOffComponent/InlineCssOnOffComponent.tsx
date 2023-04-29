import { useState,Dispatch,SetStateAction} from "react"
type PropsType={
    onClick:Dispatch<SetStateAction<boolean>>
    value:boolean
}
export const InlineCssOnOffComponent=(props:PropsType)=>{
    // const [onSt,setOnSt]=useState<boolean>(false)
    const onStyle={
        display:'inline-block',
        width: '30px',
        border:'1px solid black',
        backgroundColor:props.value?'green':'',
        marginLeft:'10px'
    }
    const offStyle={
        display:'inline-block',
        width: '30px',
        backgroundColor:props.value?'':'red',
        border:'1px solid black',
        marginLeft:'10px'
    }
    const switcherStyle={
        display:'inline-block',
        width: '10px',
        height:'10px',
        backgroundColor: props.value?'green':'red',
        borderRadius:'50%',
        border:'1px solid black',
        marginLeft:'10px'
    }
    return (
        <div>
            <span style={onStyle}  onClick={()=>props.onClick(!props.value)}>on</span>
            <span style={offStyle}  onClick={()=>props.onClick(!props.value)}>off</span>
            <span style={switcherStyle}></span>
        </div>
    )
}