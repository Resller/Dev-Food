import { InitialStatePaymentType, typesPaymentAction } from "../types/PaymentTypes";

export const paymentInitialState : InitialStatePaymentType = {
    coupon:0,
    discountTotal:0,
    total:0,
    delivery:0,
}

export const PaymentReducer = (state:InitialStatePaymentType,action:typesPaymentAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'CHANGE_COUPON':   
                return{...state,coupon:action.payload.coupon}
            case 'COUPON_CHECK':   
                return{...state,coupon:action.payload.discount}
            case 'CHANGE_DISCOUNT_TOTAL': 
            return{...state,discountTotal:action.payload.discount,total:action.payload.total}
            default:
                return state
        }
    }
    return state
}
