
import { ProductCartType } from "./Cartypes"
import { AddressType } from "./ListAddressTypes"
import { InitialStatePaymentType } from "./PaymentTypes"

export type OrderType = {
    products:ProductCartType[],
    address: AddressType,
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
        address: AddressType,
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
