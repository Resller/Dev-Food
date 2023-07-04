import { AreaSearch } from "./styled"

import logo from '../../img/logo.png'
import search from '../../img/search.png'
import { useEffect, useState ,useContext} from "react"
import { Context } from "../../contexts/Context" 
import MenuMobile from "../MenuMobile"

let searchTime:any 

export const Search = ()=>{
    const {state,dispatch} = useContext(Context)
    
    const [active,setActive] = useState<boolean>(false);
    const [txt,setTxt] = useState<string>('');
    const [openMenuMobile,setOpenMenuMobile] = useState<boolean>(false);
    
    useEffect(()=>{
        clearTimeout(searchTime)
        searchTime = setTimeout(()=>{
            dispatch({
                type : 'CHANGE_SEARCH',
                payload : {
                    product:txt
                }
            })
        },2000)
    },[txt])
    
    const handlerBlur= ()=>{
        if(txt === ''){
            setActive(false)
        } 
    }
    const handlerFocus= ()=>{
        setActive(true)
    }

    return(
        <AreaSearch activeSearch = {active} img={search} >
            
           <div className="area-logo">
                <MenuMobile/>
                <img className="logo" src={logo} alt="" />
           </div>
           <div className="area-search">
                <div className="area-input"> 
                    <input 
                        type="text"
                        placeholder="Digiti um produto..."
                        value={txt}
                        onBlur={handlerBlur}
                        onFocus={handlerFocus}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTxt(e.target.value)}
                     /> 
                </div>                
           </div>
        </AreaSearch >
    )
}