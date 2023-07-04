import { ChangeSearchAction, InitialStateSearchType } from "../types/Searchtype"

export const searchInitialState : InitialStateSearchType = {
    product: ''
}

export const searchReducer = (state:InitialStateSearchType,action: ChangeSearchAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'CHANGE_SEARCH':
                return {...state, product: action.payload.product}
        }
    }
    return state
}