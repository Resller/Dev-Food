import { InitialStateAddressType } from "./address";


export type TypeInitialStateListAddress ={
    listAddress : InitialStateAddressType[]
}

export type AddAction = {
    type: 'ADD_NEW_ADDRESS';
    payload: {
        id:number,
        nameAddress:string,
        city:string,
        street:string,
        numberHome : string,
        mainAddress:boolean,
    };
}
export type EditAction = {
    type: 'EDIT_ADDRESS';
    payload: {
        id:number,
        nameAddress:string,
        city:string,
        street:string,
        numberHome : string,
    };
}
export type EditCartAction = {
    type: 'EDIT_CART_ADDRESS';
    payload: {
        nameAddress:string,
        city:string,
        street:string,
        numberHome : string,
    };
}

export type DeleteAction = {
    type: 'DELETE_ADDRESS';
    payload: {
        id:number,
    };
}

export type ToggleMainAddressAction = {
    type: 'TOGGLE_MAINADDRESS';
    payload: {
        id: number;
        mainAddress:boolean
    }
}

export type UpdateListAction = {
    type: 'UPDATE_LIST';
    payload: {
       newList : InitialStateAddressType[]
    }
}

export type TypeListAddresstAction = AddAction | EditAction |  EditCartAction | DeleteAction | ToggleMainAddressAction | UpdateListAction



