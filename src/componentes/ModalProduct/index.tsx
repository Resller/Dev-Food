import { AreaModal,ItemModal,Button } from "./styled"
import { ProductsDataType } from "../../types/MainTypes"
import { useState } from "react"

import { useCustomContext } from "../../contexts/Context" 

import minus from  '../../img/minus.png'
import plus from '../../img/plus.png'

type props = {
    data:ProductsDataType
    activeModal :boolean,
    setActiveModal:(a:boolean)=>void
}
export const Modal = ({data,activeModal, setActiveModal}:props)=>{
        const [qtItem,setQtItem] = useState<number>(1)    
        
        const {state,dispatch} = useCustomContext()
        
  
        const minusItem = ()=>{
            if(qtItem > 1){
                setQtItem(qtItem - 1)
            }
        }
       
        const plusItem = ()=>{
            setQtItem(qtItem + 1)
        }
        
        const cancelPurchase = ()=>{
            setQtItem(1);
            setActiveModal(false)
        }
        const AddCart = ()=>{
            dispatch({
               type:'ADD_CART',
                payload : {
                    data,
                    qtItem
                }
            })
            setActiveModal(false);
            setQtItem(1);  
        }
    
        return(
        <AreaModal modal={activeModal}  >
           <ItemModal>
                <div className="item">
                    <div className="area-img">
                        <img src={data.image} alt={data.name}/>
                    </div>
                    <div className="area-info">
                        <div className="info">
                            <h3>{data.name}</h3>
                            <div className="ingredient">{data.ingredients}</div>
                        </div>
                        <div className="area-buy">
                            <div className="add">
                                <img src={minus} alt="" onClick={minusItem} />
                                <span>{qtItem}</span>
                                <img src={plus} alt=""  onClick={plusItem}/>
                            </div>
                            <div className="total">
                                R$ {(data.price * qtItem).toFixed(2)}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="area-button">
                    <Button ph={10} pw={10} fs={16} onClick={cancelPurchase} >Cancelar</Button>
                    <Button  ph={15} pw={25}fs={22} onClick={AddCart}>Adicionar ao Carrinho</Button>
                </div>
           </ItemModal>
        </AreaModal>
    )
}