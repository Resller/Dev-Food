import { AreaModalAddress,Modal,Button} from "./styled"
import { useState,useContext, useEffect } from "react"
import { Context } from "../../contexts/Context" 


import valido from '../../img/ok.png'
import { helpersFunction } from "../../helpers/function"
type props = {
    setActiveModal:(a:boolean)=>void
}

export default ({setActiveModal}:props)=>{
    
    const {state,dispatch} = useContext(Context)
    const [name,setName] = useState<string>('')
    useEffect(()=>{
       setName(helpersFunction.formatName(state.user.name))
    },[])
    useEffect(()=>{
        let key = state.user.id + 0.5;
        localStorage.setItem(key.toString(),JSON.stringify(state.order.list));
    },[])
     
    return(
        <AreaModalAddress>
            <Modal>
                <div className="area-img">
                    <img src={valido} alt="Compra Realizada com sucesso" />
                </div>
                <div className="txt"> 
                    <span className="name">Obrigado {name} !!! </span> 
                    <span>Compra Realizada com sucesso.</span>
                </div>
                <Button onClick={()=>setActiveModal(false)}>Fechar</Button>
            </Modal>
        </AreaModalAddress>
    )
}