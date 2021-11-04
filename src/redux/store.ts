import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {valuesReducer} from "./values-reducer";
import {conditionReducer} from "./condit-reducer";

let preloadedState;
const stateFromLS=localStorage.getItem('state')
if(stateFromLS){
    preloadedState=JSON.parse(stateFromLS)
}

const rootReducer=combineReducers({
    values: valuesReducer,
    conditions: conditionReducer
})

export const store=createStore(rootReducer, preloadedState, applyMiddleware(thunk))

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export type AppStateType=ReturnType<typeof rootReducer>