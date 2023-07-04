import { MenuMobile } from './styled'
import menuMobile from '../../img/menu-Mobile.png'
import { useContext, useState } from 'react'
import { Context } from '../../contexts/Context'
export default ()=>{
    const {state,dispatch} = useContext(Context)

    const changeMenu = ()=>{
        let menu = !state.menuMobile.menu 
        dispatch({
            type:'CHANGE_MENU_MOBILE',
            payload:{
                menu
            }
        })
    }
    return(
        <MenuMobile onClick={()=>changeMenu()}>
                <img src={menuMobile} alt="" />
        </MenuMobile>
    )
}