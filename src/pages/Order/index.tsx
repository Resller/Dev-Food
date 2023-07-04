import LogoArea from "../../componentes/LogoArea";
import { 
    OrderArea,
    AreaTitle,
    Title,
    LastOrderArea,
    Orders,
    AreaGrid,
    NoOrder
} from "./styled";

import Timeline from "../../componentes/Timeline";
import LastOrder from "../../componentes/LastOrder";

import { useContext, useEffect, useState } from 'react';
import { Context } from "../../contexts/Context";
import { helpersFunction } from "../../helpers/function";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";
import OtherOrder from "../../componentes/OtherOrders";

export const Order = ()=>{
    const {state,dispatch} = useContext(Context)
    
    const [received,setReceived] = useState<boolean>(false);
    const [sent,setSent] = useState<boolean>(false);
    const [delivered,setDelivered] = useState<boolean>(false);
    
    useEffect(()=>{
        if(state.order.list.length > 0){
            let status = state.order.list[state.order.list.length-1 ].status
            switch(status.toLowerCase()){
                case 'recebido':
                    setReceived(true)
                break
                case 'enviado':
                    setReceived(true)
                    setSent(true)
                break
                case 'entregue':
                    setReceived(true)
                    setSent(true)
                    setDelivered(true)
                break
            }
        }
      
    },[state.order.list.length])
    
    return(
        <OrderArea>
            <LogoArea/>
            {state.order.list.length > 0  &&
            <>
                <LastOrderArea>
                    <Timeline 
                        received = {received}
                        sent={ sent}
                        delivered ={delivered}
                    />
                    <AreaTitle>
                        <div className="received">Pedido recebido</div>
                        <div className="sent">Pedido enviado</div>
                        <div className="delivered">Pedido entregue</div>
                    </AreaTitle>
                    <LastOrder 
                        data = {state.order.list}
                    />
                </LastOrderArea>
                {state.order.list.length > 1  &&
                    <Orders>
                            <Title>Outros Pedidos</Title>
                            <AreaGrid>
                                <OtherOrder
                                    data = {state.order.list}
                                />
                            </AreaGrid>
                    </Orders>    
              }
            
            </>           
            }
            {state.order.list.length <= 0  &&
                <LastOrderArea> 
                       <NoOrder>
                            <span>Não a pedido feitos, aproveite e faça o seu pedido </span>
                            <Link to='/'>Clique aqui</Link>
                       </NoOrder>
                </LastOrderArea>
            }
        </OrderArea>
    )
}