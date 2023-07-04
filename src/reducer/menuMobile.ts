
import { ChangeMenuAction, InitialStateMenuMobileType } from "../types/MenuMobiletype"

export const menuMobileInitialState : InitialStateMenuMobileType = {
   menu:false

}

export const menuMobileReducer = (state:InitialStateMenuMobileType,action: ChangeMenuAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'CHANGE_MENU_MOBILE':
                return{...state,menu:action.payload.menu}
        }
    }
    return state
}