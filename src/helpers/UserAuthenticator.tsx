import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { helpersFunction } from "./function"
import { useCustomContext } from "../contexts/Context"

type props = {
    children : JSX.Element
}

export const UserAuthenticator = ({children}:props)=>{  
    const {state,dispatch} = useCustomContext()
    
    useEffect(()=>{
        if(helpersFunction.isLogged()){
            dispatch({
                type : 'CHANGE_LOGGED',
                payload : {
                    logged:true
                }
           })  
        }
    },[])

    if(!state.logged.logged){
      return <Navigate to = '/login'/>
    }
    return children
}