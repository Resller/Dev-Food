export type InitialStateCartType = {
    productCart : ProductCartType[],
}
export type ProductCartType = {
    id:number,
    id_cat: number,
    name: string,
    image: string,
    price: number,
    ingredients: string,
    points: number,
    qtItem : number
}


export type AddCartAction = {
    type: 'ADD_CART';
    payload: {
       id:number,
       qtItem:number,
       data:ProductCartType
    };
}
export type PlusAction = {
    type: 'PLUS_PRODUCT';
    payload: {
       key:number,
    };
}
export type MinustAction = {
    type: 'MINUS_PRODUCT';
    payload: {
       key:number,
    };
}
export type ClearAction = {
    type: 'CLEAN_PRODUCT';
    payload: {
        productCart: ProductCartType[]
    };
}

export type typeCartAction = AddCartAction | PlusAction | MinustAction |  ClearAction 