import { TypeListAddresstAction ,TypeInitialStateListAddress} from "../types/ListAddressTypes";

export const initialStateListAddress : TypeInitialStateListAddress = {
    listAddress : []
}

export const listAddressReducer = (state:TypeInitialStateListAddress,action:TypeListAddresstAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'ADD_NEW_ADDRESS':
                let listAdd = [...state.listAddress]
                listAdd.push(
                    {
                        id:state.listAddress.length,
                        nameAddress:action.payload.nameAddress,
                        city:action.payload.city,
                        street:action.payload.street,
                        numberHome : action.payload.numberHome,
                        mainAddress:action.payload.mainAddress
                    }
                )
                return {...state, listAddress:listAdd}
            case 'EDIT_ADDRESS':
                let listEdit = [...state.listAddress];
                    listEdit.map(i =>{
                    if (i.id === action.payload.id) {
                        i.nameAddress = action.payload.nameAddress,
                        i.city = action.payload.city,
                        i.street = action.payload.street,
                        i.numberHome = action.payload.numberHome
                    }
                    return {...state, listAddress:listEdit}
                })
                break
            case 'EDIT_CART_ADDRESS' :
                    let listEditCart = [...state.listAddress];
                    listEditCart.map(i =>{
                    if (i.mainAddress) {
                        i.nameAddress = action.payload.nameAddress,
                        i.city = action.payload.city,
                        i.street = action.payload.street,
                        i.numberHome = action.payload.numberHome
                    }
                    return {...state, listAddress: listEditCart}
                })
                break
            case 'DELETE_ADDRESS':
                let listDelete = [...state.listAddress];
                let newListDelete = listDelete.filter(i=> i.id !==action.payload.id)   
                return {...state,listAddress:newListDelete}

            case 'TOGGLE_MAINADDRESS':
                let listToggle = [...state.listAddress];
                listToggle.map(i=>{
                    if(i.id === action.payload.id){
                        i.mainAddress = true
                    }else{
                        i.mainAddress = false
                    }
                })
                return {...state, listAddress:listToggle}
            case 'UPDATE_LIST':
                return {...state, listAddress:action.payload.newList}
            default :
            return state
        }
    }
    return state
}