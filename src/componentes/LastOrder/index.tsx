import { OrderType } from "../../types/OrderTypes"
import { 
    AreaLastOrder,
    ProductArea,
    Product,
    InfoArea,
    Info,
    DateArea,
    AddressArea,
    PaymentArea
} from "./styled"

type props = {
    data: OrderType[]
}

export default ({data}:props)=>{
    const lastaOrder = data.length - 1
    return(
        <AreaLastOrder>
            <ProductArea>
                {data[lastaOrder].products.map((i,k)=>(
                    <Product key={k}>
                        <div className="area-img">
                            <img src={i.image} alt={i.name} />
                        </div>
                        <div className="area-info">
                            <span className="name">{i.name}</span>
                            <span className="price">R$ {(i.price * i.qtItem).toFixed(2)}</span>
                        </div>
                    </Product>
                ))}
            </ProductArea>
            <InfoArea>
                <Info>
                    <DateArea>
                        <h4>Data do pedido:</h4>
                        <div>{data[lastaOrder].date}</div>
                    </DateArea>
                    <AddressArea>
                        <h4>Endereço de entrega:</h4>
                        <span>{data[lastaOrder].address.nameAddress}</span>
                        <span>Rua {data[lastaOrder].address.street},{data[lastaOrder].address.numberHome}</span>
                        <span>{data[lastaOrder].address.city}</span>              
                    </AddressArea>
                </Info>
            </InfoArea>
            <PaymentArea>
                <div className="discount">
                    <span>Desconto</span>
                    <span>R$ {(data[lastaOrder].payment.discountTotal.toFixed(2))}</span>
                </div>
                <div className="delivery">  
                    <span>Taxa de Entrega</span>
                    <span>R$ {data[lastaOrder].payment.delivery.toFixed(2)}</span>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>R$ {(data[lastaOrder].payment.total).toFixed(2)}</span>
                </div>
            </PaymentArea>
        </AreaLastOrder>
    )
}