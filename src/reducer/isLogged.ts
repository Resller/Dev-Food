
import { ChangeLoggedAction, InitialStateIsLoggedType } from "../types/Logged"

export const isLoggedInitialState : InitialStateIsLoggedType = {
    logged:false
}

export const isLoggedReducer = (state:InitialStateIsLoggedType,action:ChangeLoggedAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'CHANGE_LOGGED':
                return {...state,logged: action.payload.logged}
            default : 
            return state
        }
    }
    return state
}