import { AreaModalAddress,Button,FormModalAddress,CloseArea} from "./styled"
import { useState,useContext } from "react"
import { Context } from "../../contexts/Context" 
import { Address } from "../Address"

type props = {
    id?:number
    setActiveModalEdit:(a:boolean)=>void
    cart?:boolean
}
export const ModalEditAddress = ({setActiveModalEdit,id,cart}:props)=>{

        const {state,dispatch} = useContext(Context)
        
        const closeModalAddress = (e:React.SyntheticEvent)=>{
            e.preventDefault();
                if(cart){
                    dispatch({
                        type : 'EDIT_CART_ADDRESS',
                        payload : {
                            nameAddress:state.address.nameAddress,
                            city:state.address.city,
                            street:state.address.street,
                            numberHome:state.address.numberHome,
                        }
                    })

                }else{
                    dispatch({
                    
                        type : 'EDIT_ADDRESS',
                        payload : {
                            id,
                            nameAddress:state.address.nameAddress,
                            city:state.address.city,
                            street:state.address.street,
                            numberHome:state.address.numberHome,
                        }
                    })
                    
                }
            setActiveModalEdit(false)     
        }
    return(
        <AreaModalAddress>
           <FormModalAddress onSubmit={closeModalAddress}>
                <CloseArea> 
                    <span onClick={()=>setActiveModalEdit(false)}>X</span>
                </CloseArea>
                <Address />
                <div className="area-button">
                    <Button >Alterar endereço</Button>
                </div>
           </FormModalAddress>
        </AreaModalAddress>
    )
}