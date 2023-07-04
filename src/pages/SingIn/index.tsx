import { SingInArea } from "./styled";
import { Link, useNavigate } from 'react-router-dom'
import { useContext,useState} from 'react'
import { Context } from "../../contexts/Context";
import { Api } from "../../api/Api";
import { setCookie } from "typescript-cookie";
import LogoArea from "../../componentes/LogoArea";


export const SingIn = ()=>{
    const {state,dispatch} = useContext (Context)

    const [email,setEmail] = useState<string>()
    const [password,setpassword] = useState<string>()
    const [errorLogin,setErrorLogin] = useState<string>('')

    let navigate = useNavigate()
    const changeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const changePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setpassword(e.target.value)
    }
          
    const logInto = async ()=>{
        if(email&&password){
            let json = await Api.log('/login',email,password) 
            if(json.error){
                setErrorLogin(json.error)
            }else{
              if(json.result.token){
                setCookie('token', json.result.token,{ expires: 7 })
                dispatch({
                    type : 'CHANGE_LOGGED',
                    payload : {
                        logged:true
                    }
                   })        
                navigate('/')        
              }
            }
        }else{
            setErrorLogin('digiti email e senha')
        }
    }

    return(
        <>
            <LogoArea/>
            <SingInArea>
                    <div className="area-login">
                        <h3>Login</h3>
                        <label>Email <br />
                            <input 
                                type="email"
                                placeholder='email'
                                onChange={changeEmail}            
                            />
                            {errorLogin && <span className='error'>{errorLogin}</span> } 
                        </label>
                        <label>Senha <br />
                            <input 
                                type="password"
                                placeholder='Senha' 
                                onChange={changePassword}
                            />
                            {errorLogin && <span className='error'>{errorLogin}</span> } 
                        </label>
                        <button onClick={logInto}>Entrar</button>
                        <span>Ainda não tem cadastro?<br />
                            <Link to='/singup'>Cadastre-se já!</Link>
                        </span>
                    </div>
            </SingInArea>
        </>
    )
}