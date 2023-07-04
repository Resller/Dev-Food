export type InitialStatePaymentType = {
    coupon:number,
    discountTotal:number,
    total:number,
    delivery:number
}
export type CouponAction = {
    type: 'CHANGE_COUPON';
    payload: {
        coupon: number
    };
}
export type CheckAction = {
    type: 'COUPON_CHECK';
    payload: {
        discount: number
    };
}
export type DiscountAction = {
    type: 'CHANGE_DISCOUNT_TOTAL';
    payload: {
        discount: number,
        total : number
    };
}

export type typesPaymentAction =  CouponAction |  CheckAction |DiscountAction