import {Dispatch} from "redux";

export type ConditionInitialStateType={
    isValueEntry:boolean
}
const initialState={
    isValueEntry: false
}

export const conditionReducer=(state:ConditionInitialStateType=initialState, action: ActionType)=>{
    switch(action.type){
        case "SET-IS-VALUE-ENTRY": {
            return {...state, isValueEntry: action.isValueEntry}
        }
        default: return state
    }
}

type ToggleIsValueEntryActionType={
    type: 'SET-IS-VALUE-ENTRY',
    isValueEntry: boolean
}

export const  toggleIsValueEntryAC=(isValueEntry: boolean): ToggleIsValueEntryActionType=>({
    type:"SET-IS-VALUE-ENTRY", isValueEntry
})

type ActionType=ToggleIsValueEntryActionType
