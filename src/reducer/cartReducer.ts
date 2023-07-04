
import { InitialStateCartType, ProductCartType, typeCartAction } from "../types/Cartypes"

export const cartInitialState : InitialStateCartType = {
    productCart:[],
}
let stop = 0
export const CartReducer = (state:InitialStateCartType,action:typeCartAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'ADD_CART':
                if(stop === 1 ){
                    let id = action.payload.data.id
                    let newProduct = [...state.productCart]
                    let index = newProduct.findIndex(item=> item.id === id)
                    if(index > -1){
                        newProduct[index].qtItem += action.payload.qtItem
                    }else{
                        newProduct.push({
                            ...action.payload.data,
                            qtItem:action.payload.qtItem
                        })
                    }
                    stop = 0
                    return{...state,productCart :newProduct}
                }else{
                    stop = 1
                }
            break
                    
            case 'PLUS_PRODUCT' :  
                if(stop === 0 ){
                    let indexPlus = action.payload.key
                    let productPlus = [...state.productCart]
                    productPlus[indexPlus].qtItem++;
                    stop = 1
                    return{...state,productCart:productPlus}
                }else{
                    stop = 0
                }
    
            break
            case 'MINUS_PRODUCT' : 
                if(stop === 0 ){
                  
                    let indexMinus = action.payload.key;
                    let productMinus = [...state.productCart];
                    productMinus[indexMinus ].qtItem--;
                    if(  productMinus[indexMinus ].qtItem <= 0){
                        productMinus = productMinus.filter(i=>i.qtItem > 0 )
                        return{...state,productCart:productMinus}
                    }
                    stop = 1
                    return{...state,productCart:productMinus}
                }else{
                    stop = 0
                }
            break
            case 'CLEAN_PRODUCT' : 
                        let clearProduct :ProductCartType[] = []
                    return{...state,productCart:clearProduct}
        }
    }
    return state
}