import { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import s from './useEffect.stories.module.css'
export default {
    title: 'learn/learn useEffect'
}

/**
 * 
 * useEffect like sipmle
 * useEffect at clock(usual and analog variants)
 */

const functionWithHardCalculations = (): number => {
    console.log('functionWithHardCalculations is rendered')
    return 1000
}

export const Component = () => {
    const [value, setValue] = useState<number>(functionWithHardCalculations)
    useEffect(() => {
        console.log('useEffect is worked');
    })
    return <>
        <button onClick={() => setValue(value + 1)}>{value}</button>
    </>
}

export const Clock = () => {
    const [value, setValue] = useState(new Date())
    useEffect(() => {
        // setTimeout(()=>setValue(new Date()),1000)
        // при уходе из этой компоненты setInterval продолжает работать,
        // утечка памяти, поэтому нужно очистить через clearInterval
        const id = setInterval(() => {
            console.log('bad ticking');
            setValue(new Date());
            // clearInterval(id); here is it does not work
        }, 1000)
        return () => clearInterval(id);//good
    }, [])
    return <>
        <span>{value.getHours()}</span>
        :
        <span>{value.getMinutes()}</span>
        :
        <span>{value.getSeconds()}</span>
    </>
}

export const AnalogClock = () => {
    const [value, setValue] = useState(new Date())
    useEffect(() => {
        const id = setInterval(() => {
            setValue(new Date());
        }, 1000)
        //week 11 and 12 :cleanup at useEffect when component is dead or run useEffect
        // it's decided by a returning of the useEffect callback.
        return () => clearInterval(id);
    }, [])
    return <>
        <div className={s.clock} >
            <div
                className={s.sec}
                style={{ transform: `rotate(${value.getSeconds() * 6}deg)` }}
            />
            <div
                className={s.min}
                style={{ transform: `rotate(${value.getMinutes() * 6}deg)` }}
            />
            <div
                className={s.hour}
                style={{ transform: `rotate(${value.getHours() * 6}deg)` }}
            />
        </div>
    </>
}

/**
 * 
 * <style>
      .a {
        width: 50px;
        height: 50px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .b {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        position: relative;
      }
      .b::before {
        content: '';
        width: 2px;
        height: 20px;
        background-color: white;
        position: absolute;
        bottom: 0;
      }
      .b {
        transform: rotate(-200deg);
      }
    </style>
  </head>
  <body>
    <div class="a">
      <div class="b"></div>
    </div>
  </body>
 * 
 */