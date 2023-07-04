import { 
    AreaCart,
    AreaBody,
    AreaProductCart,
    ProductCartArea,
    EmptyArea,
    CartAddressArea,
    Delivery,
    AreaScroll,
    ViewMore
} from "./styled"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../contexts/Context";

import { helpersFunction } from "../../../helpers/function";

import { ModalEditAddress } from "../../ModalEditAddress";

import Coupon from "../Coupon";
import HeaderCart from "../HeaderCart";
import ProductCart from "../ProductCart";
import AddressArea from "../AddressArea";
import Payment from "../Payment";
import ModalCompletedPurchase from "../../ModalCompletedPurchase";
import { ModalAddress } from "../../ModalAddress";
import ModalViewMore from "../ModalViewMore";

export const Cart = ()=>{
    const {state,dispatch} = useContext(Context);

    const [openBody,setOpenBody] = useState <boolean>(false);
    const [openModalEditAddress,setOpenModalEditAddress] = useState <boolean>(false);
    const [completedPurchase,setCompletedPurchase] = useState <boolean>(false);
    const [activeModalAddress,setActiveModalAddress] = useState <boolean>(false);
    const [activeModalViewMore,setActiveModalViewMore] = useState <boolean>(false);
   
    const navigate = useNavigate()
    useEffect(()=>{
            let [discount,total]= helpersFunction.doCalculation(state.payment.coupon,state.cart.productCart)
            dispatch({
                type :'CHANGE_DISCOUNT_TOTAL',
                payload : {
                    discount : +discount,
                    total : +total
                }
              })
    },[state.payment.coupon,state.cart.productCart])

    useEffect(()=>{

    },[state.cart.productCart,state.cart.productCart.map(i=>i.qtItem)])


    const editAddressCart = ()=>{
        setOpenModalEditAddress(true)
    }
    const showBody = ()=>{
        setOpenBody(!openBody)        
    }
    
    const checkout = ()=>{
        let login = helpersFunction.isLogged();
        if(login){
            let address = helpersFunction.getMainAddress(state.listAddress.listAddress);
            if(address){
                let date = helpersFunction.getDate();
                dispatch({
                    type:'SEND_ORDER',
                    payload : {
                        products:state.cart.productCart,
                        date,
                        address,
                        payment:{
                            discountTotal:state.payment.discountTotal,
                            delivery:state.payment.delivery,
                            total:state.payment.total
                        },
                        status:'enviado'
                    }
                })
                dispatch({
                    type:'CLEAN_PRODUCT',
                    payload : {
                        productCart:[]
                    }
                })
                setCompletedPurchase(true);
                setOpenBody(!openBody);
            }else{
                setActiveModalAddress(true)
            }
      

        }else{
            navigate('/login')
        }
        
    }
  
    return(
        <AreaCart>
           <HeaderCart  
                productCart = {state.cart.productCart}
                openBody
                showBody ={showBody}
            />
            <AreaBody show={openBody}>
                {state.cart.productCart.length <= 0 &&
                        <EmptyArea>Carrinho Vazio</EmptyArea>
                } 
                {state.cart.productCart.length > 0 &&
                    <AreaProductCart>
                        <AreaScroll>
                            {state.cart.productCart.map((i,k)=>(
                                <ProductCartArea key={k}>
                                    <ProductCart
                                        data={i}
                                        index={k}
                                    />
                                </ProductCartArea>                   
                            ))}
                        </AreaScroll>
                        {state.cart.productCart.length > 2 &&
                            <ViewMore onClick={()=>setActiveModalViewMore(true)}>Ver Mais</ViewMore>
                        }
                        <Delivery>Entrega</Delivery>
                        {state.listAddress.listAddress.length > 0 && 
                            state.listAddress.listAddress.map((i,k)=>(
                                i.mainAddress && 
                                    <CartAddressArea key={k}>                  
                                        <AddressArea
                                            data={i}
                                            showBody={ showBody}
                                            editAddressCart={editAddressCart}
                                        />         
                                    </CartAddressArea>              
                            ))                      
                        }
                        <Coupon/>
                        <Payment  checkout={ checkout}/>   
                    </AreaProductCart>
                }  
            </AreaBody>
            {openModalEditAddress &&
                <ModalEditAddress cart={true} setActiveModalEdit={setOpenModalEditAddress}/>
            }
            {completedPurchase &&
                <ModalCompletedPurchase setActiveModal={setCompletedPurchase} />
            }
            {activeModalAddress && 
                  <ModalAddress 
                    setActiveModal={setActiveModalAddress} 
                    message = {'Informe um endereço'}
                  />
            }
            {activeModalViewMore &&
                <ModalViewMore
                    setActiveModalViewMore = {setActiveModalViewMore}             
                />
            }
        </AreaCart>      
    )
}