import { AreaModalAddress,Button,FormModalAddress,CloseArea} from "./styled"
import { useState,useContext } from "react"
import { Context } from "../../contexts/Context" 
import { Address } from "../Address"


type props = {
    setActiveModal:(a:boolean)=>void,
    message?:string,
}

export const ModalAddress = ({setActiveModal,message}:props)=>{

        const {state,dispatch} = useContext(Context)
      
       
        const closeModalAddress = (e:React.SyntheticEvent)=>{
            e.preventDefault();
            if(state.listAddress.listAddress.length<=0){
                dispatch({
                    type : 'ADD_NEW_ADDRESS',
                    payload : {
                        nameAddress:state.address.nameAddress,
                        city:state.address.city,
                        street:state.address.street,
                        numberHome:state.address.numberHome,
                        mainAddress : true
                    }
                })
            }else{
                dispatch({
                    type : 'ADD_NEW_ADDRESS',
                    payload : {
                        nameAddress:state.address.nameAddress,
                        city:state.address.city,
                        street:state.address.street,
                        numberHome:state.address.numberHome,
                        mainAddress : false
                    }
                })
            }
            setActiveModal(false)
        }
        
    return(
        <AreaModalAddress>
           <FormModalAddress onSubmit={closeModalAddress}>
                <CloseArea> 
                    <span onClick={()=>setActiveModal(false)}>X</span>
                </CloseArea>
                <Address/>
                {message &&
                    <div className="error">{message}</div>
                }
                <div className="area-button">
                    <Button >Novo endereço</Button>
                </div>
               
           </FormModalAddress>
        </AreaModalAddress>
    )
}