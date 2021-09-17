import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputProps = {
 valueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onFocusHandler: () =>void
    value: number
    title: string
}

export function Input(props:InputProps) {

    // const setClass=()=>{
    //     return s.number + ' ' + (props.result === props.maxValue ? s.redNumber : '')
    // }

    return <>
        <span className={s.title}>{props.title}</span>
        <input className={s.text} value={props.value} type={'number'} onChange={props.valueHandler} onFocus={props.onFocusHandler}/>
    </>

}