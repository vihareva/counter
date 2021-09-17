import React from 'react';
import s from './Number.module.css'

type NumberProps = {
    result: number | string
    maxValue: number
}

export function Value(props: NumberProps) {

    const setClass = () => {
        return s.text + ' ' +
            (props.result === props.maxValue ? s.red :
            typeof (props.result) === 'string' ? s.redString : '')
    }

    return <div className={s.number}>
        <p className={setClass()}>{props.result}</p>
    </div>

}