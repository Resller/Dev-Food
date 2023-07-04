import { InitialStateUserType, TypeUserAction } from "../types/UserTypes";

export const initialStateUser : InitialStateUserType = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    id:0
}

export const userReducer = (state:InitialStateUserType,action:TypeUserAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'SEND_NAME':
                return{...state, name: action.payload.name}
            
            case 'SEND_EMAIL':
                return{...state, email: action.payload.email}
            
            case 'SEND_PASSWORD':
                return{...state,password: action.payload.password}
            
            case 'SEND_CONFIRMPASSWORD':
                return{...state,confirmPassword: action.payload.confirmPassword}
            case 'CHANGE_USER':
                return{...state, 
                    name:action.payload.name,
                    email: action.payload.email,
                    id:action.payload.id
                }
            default:
            return state
        }
    }
    return state
}