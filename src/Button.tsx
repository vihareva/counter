import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    condition: boolean
    callBack: () => void
    title: string
}

export function Button(props: ButtonType) {

    return <button className={s.button} disabled={props.condition} onClick={props.callBack}> {props.title}</button>

}