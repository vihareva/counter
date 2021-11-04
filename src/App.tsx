import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Value} from "./Value";
// import {Reset} from "./Reset";
// import {Inc} from "./Inc";
import {Button} from "./Button";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {incrementResultAC, setMaxValueAC, setResultAC, setStartValueAC, setValuesTC} from "./redux/values-reducer";
import { toggleIsValueEntryAC} from "./redux/condit-reducer";

function App() {
    // useEffect(()=>{
    //     let startValueAsString=localStorage.getItem('startValue')
    //     if(startValueAsString){
    //         let newStartValue=JSON.parse(startValueAsString)
    //         dispatch(setStartValueAC(newStartValue))
    //         dispatch(setResultAC(newStartValue))
    //     }
    // }, [])

    // useEffect(()=>{
    // let maxValueAsString=localStorage.getItem('maxValue')
    // if(maxValueAsString){
    //     let newMaxValue=JSON.parse(maxValueAsString)
    //     dispatch(setMaxValueAC(newMaxValue))
    // }
    // }, [])

    // const startValue=0;
    // const maxValue=5;

    // let [result, setResult] = useState<number>(0);//1
    //let [startValue, setStartValue] = useState<number>(0);
    //let [maxValue, setMaxValue] = useState<number>(5);

    const result=useSelector<AppStateType, number>(st=>st.values.result)
    const startValue=useSelector<AppStateType, number>(st=>st.values.startValue)
    const maxValue=useSelector<AppStateType, number>(st=>st.values.maxValue)

    const dispatch=useDispatch()

    // const conditionForSettingValues = maxValue === startValue || startValue < 0 || maxValue < 0

    //let [enteringValuesCondition, setEnteringValuesCondition] = useState<boolean>(false);
    const isValueEntry=useSelector<AppStateType, boolean>(st=>st.conditions.isValueEntry)
    let conditionForIncorrectValue = maxValue <= startValue || startValue < 0 || maxValue < 0

    const IncrementResult = () => {
        // if (result < maxValue) {//2
            // setResult(++result)
            dispatch(incrementResultAC(result, maxValue))
        }


    const ResetResult = () => {
        dispatch(setResultAC(startValue))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
    }


    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
    }

    const SetValues = () => {
        dispatch(setValuesTC(startValue, maxValue))
    }

    const onFocusHandler = () => {
        dispatch(toggleIsValueEntryAC(true))
    }


    return (<>
        <div className={s.icon}>
            <div className={s.inputs}>
                <div>
                    <Input title={'max value:'} value={maxValue}
                           valueHandler={maxValueHandler} onFocusHandler={onFocusHandler}/>
                    {/*<input value={maxValue} type={'number'} onChange={maxValueHandler} onFocus={onFocusHandler}/>*/}
                </div>
                <div>
                    <Input title = {'start value:'} value={startValue}
                           valueHandler={startValueHandler} onFocusHandler={onFocusHandler}/>
                    {/*<input value={startValue} type={'number'} onChange={startValueHandler} onFocus={onFocusHandler}/>*/}
                </div>
            </div>
            <div className={s.buttons}>
                <Button title={'SET'} condition={conditionForIncorrectValue} callBack={SetValues}/>
            </div>

        </div>

        <div className={s.icon}>

            {/*{conditionForIncorrectValue ? 'incorrect value' :*/}
            {/*    enteringValuesCondition ? 'enter values and press SET' : <Value maxValue={maxValue} result={result}/>}*/}

             <Value maxValue={maxValue} result={conditionForIncorrectValue ? 'incorrect value' :
                 isValueEntry ? 'enter values and press SET' :result}/>

            {/*{condition ? 'incorrect value':<Value maxValue={maxValue} result={result}/>}*/}

            <div className={s.buttons}>
                {/*<Inc setResult={setResult} result={result} />*/}
                {/*<Reset setResult={setResult} result={result}/>*/}
                <Button title={'INC'} condition={isValueEntry || result === maxValue}
                        callBack={IncrementResult}/>
                <Button title={'RESET'} condition={isValueEntry || result === startValue}
                        callBack={ResetResult}/>

            </div>
        </div>
    </>)

}

export default App;
