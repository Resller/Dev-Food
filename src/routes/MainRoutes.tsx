import React from 'react'
import { AnimatePresence } from 'framer-motion';
import {useLocation, useRoutes} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Order } from '../pages/Order'
import { UserAuthenticator } from '../helpers/UserAuthenticator'
import { UserPage } from '../pages/UserPage'
import { SingIn } from '../pages/SingIn'
import {SingUp } from '../pages/SingUp'
import { NoFound } from '../pages/NoFound'


export const MainRoutes = ()=>{
   let element = useRoutes ([
        {path:'/',element : <Home/>},
        {path:'/order',element : <UserAuthenticator><Order/></UserAuthenticator>},
        {path:'/user',element : <UserAuthenticator><UserPage/></UserAuthenticator>},
        {path:'/login',element : <SingIn/>},
        {path:'/singup',element : <SingUp/>},
        {path:'*',element : <NoFound/>}
    ])

    const location = useLocation()

    if (!element) return null
  
    return (
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    )
}
