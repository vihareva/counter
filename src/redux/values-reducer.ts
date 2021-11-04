import {Dispatch} from "redux";
import {toggleIsValueEntryAC} from "./condit-reducer";

type InitialStateType={
    result: number,
    startValue:number,
    maxValue: number
}
const initialState={
    result: 0,
    startValue:0,
    maxValue: 5
}
export const valuesReducer=(state:InitialStateType=initialState, action: ActionType)=>{
    switch (action.type){
        case "INC-VALUE":{
            return action.result< action.maxValue
                ? {...state, result: action.result+1 }
                : state
        }
        case "SET-RESULT":{
            return {...state, result: action.startValue}
        }
        case "SET-MAX-VALUE":{
            return {...state, maxValue: action.maxValue}
        }
        case "SET-MIN-VALUE":{
            return {...state, startValue: action.minValue}
        }
        default: return state
    }
}

type IncrementResultActionType={
    type: 'INC-VALUE',
    result: number,
    maxValue: number
}
type SetResultActionType={
    type: 'SET-RESULT',
    startValue:number
}

export const incrementResultAC=(result: number,maxValue: number):IncrementResultActionType=>({
    type:'INC-VALUE', result,maxValue
})

export const setResultAC=(startValue: number):SetResultActionType=>({
    type: "SET-RESULT",startValue
})
export const setMaxValueAC=(maxValue: number)=>({type: 'SET-MAX-VALUE', maxValue} as const)

export const setStartValueAC=(minValue: number)=>({type: 'SET-MIN-VALUE', minValue} as const)

type SetMaxValueActionType=ReturnType<typeof setMaxValueAC >
type SetMinValueActionType=ReturnType<typeof setStartValueAC >


type ActionType=IncrementResultActionType|SetResultActionType|SetMaxValueActionType|SetMinValueActionType

export const setValuesTC=(startValue: number,maxValue: number )=>(dispatch: Dispatch)=>{
    dispatch(setResultAC(startValue))
    // localStorage.setItem('startValue', JSON.stringify(startValue))
    // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    dispatch(toggleIsValueEntryAC(false))
}