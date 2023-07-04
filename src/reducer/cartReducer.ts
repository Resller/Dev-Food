
import { InitialStateCartType, ProductCartType, typeCartAction } from "../types/Cartypes"

export const cartInitialState : InitialStateCartType = {
    productCart:[],
}

export const CartReducer = (state:InitialStateCartType,action:typeCartAction)=>{
    if(action && action.type){
        switch(action.type){
            case 'ADD_CART':
                
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
                    
                    return{...state,productCart :newProduct}
               
            break
                    
            case 'PLUS_PRODUCT' :  
               
                    let indexPlus = action.payload.key
                    let productPlus = [...state.productCart]
                    productPlus[indexPlus].qtItem++;
                    
                    return{...state,productCart:productPlus}
                
    
            break
            case 'MINUS_PRODUCT' : 
               
                  
                    let indexMinus = action.payload.key;
                    let productMinus = [...state.productCart];
                    productMinus[indexMinus ].qtItem--;
                    if(  productMinus[indexMinus ].qtItem <= 0){
                        productMinus = productMinus.filter(i=>i.qtItem > 0 )
                        return{...state,productCart:productMinus}
                    }
                    
                    return{...state,productCart:productMinus}
                
            break
            case 'CLEAN_PRODUCT' : 
                        let clearProduct :ProductCartType[] = []
                    return{...state,productCart:clearProduct}
        }
    }
    return state
}