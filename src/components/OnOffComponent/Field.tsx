type PropsType={
    text:string
    className?:string
}
export const Field=({text,className,...restProps}:PropsType)=>{
        return (<span className={className}> {text} </span>)
}