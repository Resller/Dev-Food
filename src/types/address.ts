export type  InitialStateAddressType = {
    id:number
    nameAddress:string,
    city:string,
    street:string,
    numberHome : string,
    mainAddress?:boolean,
}
export type ChangenNameAddressAction = {
    type: 'SEND_NAME_ADDRESS';
    payload: {
        nameAddress:string
    };
}
export type ChangeCityAction = {
    type: 'SEND_CITY';
    payload: {
       city:string
    };
}
export type ChangeStreetAction = {
    type: 'SEND_STREET';
    payload: {
       street:string
    };
}
export type ChangeNumberHomeAction = {
    type: 'SEND_NUMBER_HOME';
    payload: {
      numberHome:string
    };
}
 
export type TypeAddressAction =  ChangenNameAddressAction | ChangeCityAction | ChangeStreetAction | ChangeNumberHomeAction
