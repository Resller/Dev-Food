import{ AreaRegister} from './styled'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

type props = {
    txt:string
}

export const Register = ({txt}:props)=>{
   
    const {state,dispatch} = useContext (Context)
  
    return(
        <AreaRegister>
            <h3>Dados</h3>
            <label>Nome
                <br />
                <input 
                    type="text"
                    placeholder='Nome '
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_NAME',payload:{name:e.target.value}})}
                    required
                />
            </label>
            <label>Email 
                <br />
                <input 
                    type="email"
                    placeholder='email'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_EMAIL',payload:{email:e.target.value}})}  
                    required
                />
            </label>
            <label>Senha 
                <br />
                <input 
                    type="password"
                    placeholder='Senha' 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_PASSWORD',payload:{password:e.target.value}})}
                    required
                />
                {txt && <span className='error'>{txt}</span> } 
            </label>
            <label>Confirmar Senha
                <br />
                <input 
                    type="password"
                    placeholder='Senha' 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_CONFIRMPASSWORD',payload:{confirmPassword:e.target.value}})}
                    required
                />
                 {txt && <span className='error'>{txt}</span> } 
            </label>
        </AreaRegister>
    )
}