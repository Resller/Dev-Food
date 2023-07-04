import { SingUpArea } from "./styled";
import { Link, useNavigate } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import { Context } from "../../contexts/Context";
import { Register } from "../../componentes/Register";
import { Address } from "../../componentes/Address";
import { Api } from "../../api/Api";
import { setCookie } from "typescript-cookie";
import LogoArea from "../../componentes/LogoArea";


export const SingUp = ()=>{
    
    const {state,dispatch} = useContext (Context)
    
    const [errorPassword,setErrorPassword] = useState<string>('')
    const [errorRegister,setErrorRegister] = useState<string>('')

    let navigate = useNavigate()
   
    const newUser = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        if(state.user.password !== state.user.confirmPassword){
            setErrorPassword('Senha não confere');
            return
        }
        setErrorPassword('');
        let json = await Api.register('/user',state.user.name,state.user.email,state.user.password);
        if(json.result.token){
           setCookie('token', json.result.token,)
           dispatch({
                type : 'ADD_NEW_ADDRESS',
                payload : {
                    nameAddress:state.address.nameAddress,
                    city:state.address.city,
                    street:state.address.street,
                    numberHome:state.address.numberHome,
                    mainAddress : true
                }
            })
            let jsonUSer = await Api.apiInfoUser('/user');
            localStorage.setItem(jsonUSer.result.user.id.toString(),JSON.stringify(state.listAddress.listAddress))    
            dispatch({
                type : 'CHANGE_LOGGED',
                payload : {
                    logged:true
                }
           })  
           navigate('/')
        }else{
            setErrorRegister(json.error)
        }
    }
    
    return(
        <>
            <LogoArea/>
            <SingUpArea>
                <form onSubmit={newUser}>
                    <div className="area-registre">
                        <div className="area-singUp">
                            <Register txt={errorPassword} />
                            <Address 
                            
                            />
                        </div>     
                        <div className="area-button">
                            <button >Cadastrar</button>
                            <span> Já tem cadastro?
                                <Link to='/login'> Faça o login!</Link>
                            </span>
                        </div>
                    </div> 
                </form>
            </SingUpArea>
        </>
    )
}