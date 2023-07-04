
import { Header } from "./componentes/Header"
import { Contanier, Template } from "./componentes/MainComponents"

import bg from './img/bg.png'
import { MainRoutes } from "./routes/MainRoutes"
import { Tooltip } from 'react-tooltip'
import { useEffect, useState } from 'react';
import { useCustomContext } from "./contexts/Context"
import { Api } from "./api/Api"
import { helpersFunction } from "./helpers/function"
import { InitialStateAddressType } from "./types/address"

function App() {
    const {state,dispatch} = useCustomContext()

    useEffect(()=>{
        const getInfoUser = async ()=>{
            if(state.logged.logged){
                let json = await Api.apiInfoUser('/user')
                if(json.result.user){
                   dispatch({
                      type:'CHANGE_USER',
                      payload : {
                          name:json.result.user.name,
                          email:json.result.user.email,
                          id :json.result.user.id,
                      }
                  })                    
                }
            }
        }
        getInfoUser();
    },[state.logged.logged])
    
    useEffect(()=>{
        if(state.logged.logged){
            let listAddress = helpersFunction.getListAddress(state.user.id)
            if(listAddress.length > 0){
               dispatch({
                  type:'UPDATE_LIST',
                  payload : {
                    newList:listAddress
                  }
               })
            }
        }
     },[state.user.id])

     useEffect(()=>{
        let key = state.user.id + 0.5
        let listOrders = helpersFunction.getListAddress(key)
        if(listOrders){
           dispatch({
              type:'GET_ORDERS',
              payload : {
                list : listOrders
              }
           })
        }
     },[state.user.id])

    return (
        <Template>
            <Header/>
            <Contanier img={bg}>
                <MainRoutes/>
            </Contanier>
            <Tooltip id="tip-rigth" place="right" />
            <Tooltip id="tip-top" place="top" />
        </Template>
    )
}

export default App
