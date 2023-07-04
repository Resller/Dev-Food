import{ AreaAddress} from './styled'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export const Address = ()=>{
    const {state,dispatch} = useContext (Context)
   
    return(
        <AreaAddress>
            <h3>Endereço</h3>
            <label>Nome do Endereço <br />
                <input 
                    type="text"
                    placeholder='ex: Minha casa'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_NAME_ADDRESS',payload:{nameAddress:e.target.value}})}
                    required
                   
                />
            </label>
            <label>Cidade 
                <br />
                <input 
                    type="text"
                    placeholder='Cidade'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_CITY',payload:{city:e.target.value}})}
                    required
                   
                />
            </label>
            <label>Rua 
                <br />
                <input 
                    type="text"
                    placeholder='Rua'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_STREET',payload:{street:e.target.value}})}
                    required
                   
                />
            </label>                
            <label>Número 
                <br />
                <input 
                    type="number"
                    placeholder='Número'
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>dispatch({type:'SEND_NUMBER_HOME',payload:{numberHome:e.target.value}})}
                    required
                  
                />
            </label>
        </AreaAddress>
    )
}