import {
   AddressArea, 
   ProfileArea, 
   UserArea,
   Address,
   InfoAddress,
   EditAddress,
   ModalAddressArea,
   GridArea
} from './styled'

import { useContext, useEffect, useState } from 'react';
import { Context, useCustomContext } from '../../contexts/Context'; 
import {removeCookie } from 'typescript-cookie';

import { ModalEditAddress } from '../../componentes/ModalEditAddress';
import { ModalAddress } from '../../componentes/ModalAddress';

import edit from '../../img/edit.png'
import deleteIcon from '../../img/delete.png'
import main from '../../img/main.png'
import { Api } from '../../api/Api';

import { helpersFunction } from '../../helpers/function';
import LogoArea from '../../componentes/LogoArea';


export const UserPage = ()=>{
   
    const {state,dispatch} = useCustomContext()

   const [activeModalAddress,setActiveModalAddress] = useState<boolean>(false)
   const [activeModalAddressEdit,setActiveModalAddressEdit] = useState<boolean>(false)
   const [id,setId] = useState <number>(0)

   useEffect (()=>{
      localStorage.setItem(state.user.id.toString(),JSON.stringify( state.listAddress.listAddress))
   },[state.address])
   
   const openModalNewAddress = ()=>{
      setActiveModalAddress(true)
   }  
   const editAddress = (k:number)=>{
      setId(k)
      setActiveModalAddressEdit(true)
   }
   const deleteAddress = (id:number)=>{
     
      dispatch({
         type:'DELETE_ADDRESS',
         payload : {
           id
         }
      })
   }
   const addMainAddress = (id:number)=>{
      dispatch({
         type:'TOGGLE_MAINADDRESS',
         payload : {
            id
         }
      })
   }
   const doLogout = ()=>{
         removeCookie('token')
         localStorage.setItem(state.user.id.toString(),JSON.stringify(state.listAddress.listAddress))
         window.location.reload()
   }
  
   return(
      <UserArea>
         <LogoArea/>
          <ProfileArea>
               <div className='header-profile'>
                  <h2>Meu Perfil</h2>
                  <button onClick={doLogout}>Sair</button>
               </div>
               <hr />
               <div className='area-info'>
                  <div className='name'>
                     <span className='info'>Nome do usuário</span>
                     <span>{state.user.name}</span>
                  </div>
                  <div className='email'>
                     <span className='info'>Email</span>
                     <span>{state.user.email}</span>  
                  </div>
               </div>
          </ProfileArea>
          <AddressArea>
               <div className='header-address'>
                  <h2>Meus endereços</h2>
                  <button onClick={openModalNewAddress}><span>+</span>Novo endereço</button>
               </div>
               <hr />
               <h4>Endereço</h4>
            <GridArea>
               { state.listAddress.listAddress && 
                state.listAddress.listAddress.map((i,k)=>(                    
                  <Address key={k}>
                     <InfoAddress  mainAddress={i.mainAddress}>
                        <div className='name-address'>
                           {i.nameAddress}
                           <img src={main} alt="" />
                        </div>
                        <div className='address'><span>Rua: </span>{i.street},{i.numberHome}</div>
                        <div className='address'><span>Cidade: </span>{i.city}</div>
                     </InfoAddress>
                     <EditAddress>
                        <div className='area-icon'  >
                           <div className='edit' onClick={()=>editAddress(i.id)} data-tooltip-id='tip-top' data-tooltip-content='Editar'  >
                              <img src={edit} alt="" />
                           </div>
                           <div className='delete' onClick={()=>deleteAddress(i.id)} >
                              <img src={deleteIcon} alt="" data-tooltip-id = 'tip-top' data-tooltip-content='Deletar'  />
                           </div>
                           <div className='main-address' onClick={()=>addMainAddress(i.id)}>
                                 Padrão
                           </div>
                        </div>
                     </EditAddress>                         
                  </Address>                     
                  ))
               }
            </GridArea>
               {activeModalAddressEdit && 
                  <ModalEditAddress id={id} setActiveModalEdit={setActiveModalAddressEdit} />
               }
         </AddressArea>
         <ModalAddressArea>
                {activeModalAddress && 
                  <ModalAddress 
                     setActiveModal={setActiveModalAddress} 
                  />
                }
         </ModalAddressArea>
      </UserArea>
   )
}