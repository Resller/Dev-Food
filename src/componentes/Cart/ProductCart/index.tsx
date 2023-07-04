import { ProductArea} from "./styled";

import minus from '../../../img/minus.png';
import plus from '../../../img/plus.png';
import { useContext, useEffect } from "react";
import { Context } from "../../../contexts/Context";
import { ProductCartType } from "../../../types/Cartypes";
import { helpersFunction } from "../../../helpers/function";

type props = {
    data: ProductCartType
    index:number,
}

export default ({data,index}:props)=>{
    
    const {state,dispatch} = useContext(Context);

    useEffect(()=>{
        let [discount,total]= helpersFunction.doCalculation(state.payment.coupon,state.cart.productCart)
        dispatch({
            type :'CHANGE_DISCOUNT_TOTAL',
            payload : {
                discount : +discount,
                total : +total
            }
          })
    },[data.qtItem])
    
    const plusProduct = (index:number)=>{
        dispatch({
        type : 'PLUS_PRODUCT',
        payload : {
            key : index
        }
      })     
    }
    
    const minusProduct = (index:number)=>{
        dispatch({
            type : 'MINUS_PRODUCT',
            payload : {
                key : index
            }
        })
    }

    return(
        <ProductArea>
            <div className="area-img">
                <img src={data.image} alt="" />
            </div>
            <div className="area-info-cart">
                <div className="name-product">{data.name}</div>
                <div className="price-product">R$ {(data.qtItem * data.price).toFixed(2)}</div>
            </div>
            <div className="area-add">
                <img className="minus" src={minus} alt="" onClick={()=>minusProduct(index)}/>
                <span>{data.qtItem}</span>
                <img className="plus" src={plus} onClick={()=>plusProduct(index)} /> 
            </div>
        </ProductArea>
    ) 
}