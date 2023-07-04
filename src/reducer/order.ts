import { InitialStateOrderType, TypeOrderAction } from "../types/OrderTypes"

export const orderInitialState : InitialStateOrderType = {
    list : [],
}

export const orderReducer = (state: InitialStateOrderType,action: TypeOrderAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'SEND_ORDER':
                    let order ={
                        products:action.payload.products,
                        date:action.payload.date,
                        address:action.payload.address,
                        payment:action.payload.payment,
                        status :action.payload.status ,
                    }
                    let newList = [...state.list];
                    newList.push(order)

                return {...state,list:newList}
            case 'GET_ORDERS':
                let getList = action.payload.list
                return{...state,list:getList}
            default :
                return state
        }
    }
    return state
}