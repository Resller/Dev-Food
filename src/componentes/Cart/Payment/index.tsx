import {PaymentArea,CartButton}from './styled'
import { Context } from "../../../contexts/Context";
import { useContext, useEffect} from "react";

import { } from "./styled";

type props = {   
    checkout:()=>void
}
export default ({checkout}:props)=>{
    const {state} = useContext(Context)
    return(
        <>
            <PaymentArea>
                <div className="payment"><span>Desconto</span> <span>R${state.payment.discountTotal.toFixed(2)}</span></div>
                <div className="payment"> <span>Taxa de Entrega</span> <span>R${state.payment.delivery.toFixed(2)}</span></div>
                <div className="payment"><span>Total</span><span>R${state.payment.total.toFixed(2)}</span></div>
            </PaymentArea>
            <CartButton onClick={checkout}>
            Finalizar Compra
            </CartButton>
        </>
    )
}