type PropsType={
    className:string
}
export const Button=({className,...restProps}:PropsType)=>{
        return (<span className={className}> button </span>);
}