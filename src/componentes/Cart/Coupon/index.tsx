import { useContext, useEffect, useState } from "react";
import { Context } from "../../../contexts/Context";
import { CouponArea } from "./styled";

let couponTime:any

export default ()=>{
    
    const {state,dispatch} = useContext(Context);
   
    const [coupon, setCoupon] = useState<string>('');
    const [noCoupon, setNoCoupon] = useState<string>('');
 
    useEffect(()=>{    
        if(coupon){
            switch(coupon.toUpperCase()){
                case 'DEV' :{
                    dispatch({
                            type:'CHANGE_COUPON',
                            payload : {
                               coupon : 10
                            }
                        })
                        setNoCoupon('')
                    }
                    break
                    case '5OFF' :{
                        dispatch({
                            type:'CHANGE_COUPON',
                            payload : {
                               coupon : 5
                            }
                        })
                        setNoCoupon('')
                    }
                    break
                    default :
                        dispatch({
                            type:'CHANGE_COUPON',
                            payload : {
                            coupon : 0
                            }
                        })
                    setNoCoupon('cupom invalido')
                    break
            }
        }else{
            setNoCoupon('') 
        }
    },[coupon])

    return (
        <CouponArea>
            <label>Cupom de desconto</label>
            <input 
                type="text"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCoupon(e.target.value)}                                    
            />
            {noCoupon &&
                <span className="no-coupon">{noCoupon}</span>
            } 
        </CouponArea>
    )
}