import { AreaHeader} from "./styled"

import logoStore from '../../img/store.png'
import logoOrder from '../../img/order.png'
import logoProfile from '../../img/profile.png'

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

export const Header = ()=>{

    const {state,dispatch}=useContext(Context);

    return(
        <AreaHeader menu={state.menuMobile.menu}>
            <NavLink data-tooltip-id = 'tip-rigth' data-tooltip-content='Home' to='/' className="area-icon">
                <img src ={logoStore} alt="" />
            </NavLink >
            <NavLink data-tooltip-id = 'tip-rigth' data-tooltip-content='Pedidos' to='/order' className="area-icon">
                <img src ={logoOrder} alt="" />
            </NavLink >
            <NavLink data-tooltip-id = 'tip-rigth' data-tooltip-content='Perfil' to='/user'  className="area-icon">
                <img src ={logoProfile} alt="" />
            </NavLink >
        </AreaHeader>
)
}