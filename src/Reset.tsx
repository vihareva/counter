import React from 'react';

type ResetPropsType={
    setResult:(result: number)=>void
    result: number
}

export function Reset(props:ResetPropsType ) {

    const ResetResult=(res: number)=>{
        props.setResult(0)
    }

    return <button disabled={props.result===0} onClick={()=>{ResetResult(props.result)}}> RESET</button>;
}
