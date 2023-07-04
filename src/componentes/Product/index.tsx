import { AreaProduct } from "./styled"
import { ProductsDataType } from "../../types/MainTypes"
import img from '../../img/next.png'

type props = {
    data: ProductsDataType,
    itemModalFunc:any,
    activeModalFunc:(b:boolean)=>void
}


export const Product = ({data,itemModalFunc,activeModalFunc}:props)=>{
    
    const openModal = ()=>{
        itemModalFunc(data);
        activeModalFunc(true)
    }
    return(
        <AreaProduct  onClick={openModal}>
           <div className="area-img">
            <img src={data.image} alt={data.name} />
           </div>
           <div className="area-info">
                <h3>{data.name}</h3>
                <div className="price">R$ {data.price.toFixed(2)}</div>
                <div className="ingredient">{data.ingredients}</div>
           </div>
           <div className="area-next" > 
                <img src={img} alt="next" />
           </div>
        </AreaProduct>
    )
}