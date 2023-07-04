import {AreaHeader,AreaCloseCart}from './styled'

import iconClose from '../../../img/down.png';
import iconCart from '../../../img/cart.png';
import { ProductCartType } from '../../../types/Cartypes';

type props = {
    productCart :ProductCartType[],
    openBody:boolean,
    showBody : ()=>void
}

export default ({productCart,openBody,showBody}:props)=>{
    return(
        <AreaHeader onClick={showBody}>
           <img src={iconCart} alt="carrinho" />
            <div className="info-cart"> 
                <h4>Meu Carrinho</h4>
                <span>({productCart.length})</span>
            </div>    
            <AreaCloseCart show={openBody} >
                    <img src={iconClose} alt="fechar-carrinho"  />
            </AreaCloseCart>
        </AreaHeader>
    )
}