import { InitialStateAddressType, TypeAddressAction } from "../types/address"

export const initialAddressState: InitialStateAddressType = {
    id:0,
    nameAddress:'',
    city:'',
    street:'',
    numberHome : '',
    mainAddress:false
}

export const addressReducer = (state:InitialStateAddressType,action:TypeAddressAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'SEND_NAME_ADDRESS':
                return{...state, nameAddress: action.payload.nameAddress}
            
            case 'SEND_CITY':
                return{...state, city: action.payload.city}
            
            case 'SEND_STREET':
                return{...state,street: action.payload.street}
            
            case 'SEND_NUMBER_HOME':
                return{...state,numberHome: action.payload.numberHome}
            default:
            return state
        }
    }
    return state
}