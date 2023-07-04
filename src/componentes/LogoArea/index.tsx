import { AreaLogo } from './styled' 

import logo from '../../img/logo.png'
import MenuMobile from '../MenuMobile'

export default ()=>{

    return(
        <AreaLogo >
            <MenuMobile/>
            <div className='area-logo'>
                <img className='logo' src={logo} alt="" />
            </div>
        </AreaLogo >
    )
}