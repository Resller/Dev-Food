
import { OrderType } from "../../types/OrderTypes"
import { 
    AreaOtherOrder,
    InfoHeader,
    InfoOrder,
    Address,
    Total
} from "./styled"

type props = {
    data: OrderType[]
}

export default ({data}:props)=>{
    let newData = data.filter((i,k)=>{
        if(k < (data.length-1) ){
            return i
        }
    })  

    return(
        <>
            { newData.length > 0 &&
                newData.map((i,k)=>(
                    <AreaOtherOrder key={k}>
                        <InfoHeader>
                            <span className="date">{i.date}</span>
                            <span className="status">{i.status}</span>
                        </InfoHeader>
                        <InfoOrder>
                            <Address>
                                <span>{i.address.nameAddress}</span>
                                <span>Rua {i.address.street},{i.address.numberHome}</span>
                                <span>{i.address.city}</span>
                            </Address>
                            <Total>
                                <span>R$ {i.payment.total}</span>
                            </Total>
                        </InfoOrder>
                    </AreaOtherOrder>
                ))
            }
        </>  
    )
}