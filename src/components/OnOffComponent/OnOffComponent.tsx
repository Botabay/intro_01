import { Button } from './Button';
import { Field } from './Field';
import s from './OnOffComponent.module.css'

type PropsType = {
    turnedOn: boolean
    callback:(v:boolean)=>void
}

export const OnOffComponent = ({ turnedOn,callback, ...restProps }: PropsType) => {
    return (
        <div>
            <span style={turnedOn?{background:'green'}:{background:'white'}}
                onClick={()=>callback(!turnedOn)}> on </span>
            <span style={!turnedOn?{background:'red'}:{background:'white'}}
                onClick={()=>callback(!turnedOn)}> off </span>
            <span style={turnedOn?{background:'green'}:{background:'red'}}> bulb </span>
            {/* {turnedOn && <Field text={'on'} className={s.green} />}
            {turnedOn && <Field text={'off'} />}
            {turnedOn && <Button className={s.green} />}
            {!turnedOn && <Field text={'on'} />}
            {!turnedOn && <Field text={'off'} className={s.red} />}
            {!turnedOn && <Button className={s.red} />} */}
        </div>
    )
}

/**
 * export const OnOffComponent=({turnedOn,...restProps}:PropsType)=>{
    if(turnedOn) {
        return (
            <div>
                <Field text={'on'} className={s.green}/>
                <Field text={'off'}/>
                <Button className={s.green}/>
            </div>
        )
    } else {
        return (
            <div>
               <Field text={'on'} />
               <Field text={'off'} className={s.red}/>
               <Button className={s.red}/>
            </div>
        )
    }
}
 */