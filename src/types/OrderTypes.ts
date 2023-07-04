
import { ProductCartType } from "./Cartypes"
import { InitialStatePaymentType } from "./PaymentTypes"
import { InitialStateAddressType } from "./address"

export type OrderType = {
    products:ProductCartType[],
    address: InitialStateAddressType,
    payment: InitialStatePaymentType,
    date:string,
    status :string,
}
export type InitialStateOrderType = {
    list: OrderType []
}

export type SendOrderAction = {
    type: 'SEND_ORDER';
    payload: {
        products:ProductCartType[],
        address: InitialStateAddressType,
        payment: InitialStatePaymentType,
        date:string,
        status :string,
    };
}

export type GetOrderAction = {
    type: 'GET_ORDERS';
    payload: {
        list: OrderType []
    };
}


export type  TypeOrderAction =  SendOrderAction | GetOrderAction
