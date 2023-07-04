import { 
    AreaModal,
    Modal,
    HeaderArea,
    AreaProduct,
    Title,
    CloseModal,
    CloseModalButton
 } from "./styled"

 import { useContext } from "react"
import { Context } from "../../../contexts/Context"

import ProductCart from "../ProductCart"

type props ={
    setActiveModalViewMore : (e:boolean)=> void
}

export default ({ setActiveModalViewMore}:props)=>{
    const {state,dispatch} = useContext(Context);
    return(
        <AreaModal>
            <Modal>
                <HeaderArea>
                    <Title>Item do carrinho ({state.cart.productCart.length})</Title>
                </HeaderArea>
                { state.cart.productCart.length > 0 &&
                    state.cart.productCart.map((i,k)=>(
                        <AreaProduct key={k}>
                            <ProductCart
                                data={i}
                                index={k}
                            />
                        </AreaProduct>
                    ))
                }
                <CloseModalButton onClick={()=>setActiveModalViewMore(false)}>Fechar</CloseModalButton>    
            </Modal>
        </AreaModal>  
    )
}