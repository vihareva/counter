import React from 'react';


type IncPropsType={
    setResult:(result: number)=>void
    result: number
}

export function Inc(props: IncPropsType) {

    const IncrementResult=(res: number)=>{
        props.setResult(++res)
    }
    return <button disabled={props.result>4} onClick={()=>{IncrementResult(props.result)}}> INC</button>;
}
