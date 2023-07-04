import {Contanier}from './styled'

import editCart from '../../../img/edit.png';
import { InitialStateAddressType } from '../../../types/address';

type props = {
    data : InitialStateAddressType
    showBody : ()=>void,
    editAddressCart : ()=>void
}

export default ({data,showBody,editAddressCart}:props)=>{
    return(
        <Contanier onClick={showBody}>
            <div className="area-info">
                <div className="info">
                    <div>{data.nameAddress}</div>
                    <div>Rua {data.street},{data.numberHome}</div>
                    <div>{data.city}</div>
                </div> 
                <div className="edit">
                    <img src={editCart} onClick={()=>editAddressCart()} />
                </div>                                           
            </div>  
        </Contanier>
    )
}