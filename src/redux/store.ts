import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {valuesReducer} from "./values-reducer";
import {conditionReducer} from "./condit-reducer";

const rootReducer=combineReducers({
    values: valuesReducer,
    conditions: conditionReducer
})

export const store=createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType=ReturnType<typeof rootReducer>