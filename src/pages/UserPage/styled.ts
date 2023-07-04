import styled from "styled-components";

export const UserArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    gap:30px;
`
export const ProfileArea = styled.div`
    background-color: #F1F1F1;
    border-radius: 5px;
    padding: 0 20px;
    
    .header-profile{
        display:flex;
        align-items: center;
        justify-content: space-between;
       
        h2{
            padding:20px;
            font-weight: bold;
            font-size: 25px;
           
        }
        button{
            border: 0;
            background-color:#d10000;
            box-shadow: 4px 5px 0px #999;
            color: #FFF;
            font-size:17px;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap:10px;
            margin-right:30px;
            
            span{
                font-size:25px;
            }
            &:hover{
                opacity:0.9;
            }
        }
    }
    
  
    .area-info{
        display: flex;
        flex-direction: column;
        gap:10px;
        padding:20px;
    }
    .name,.email{
        display: flex;
        gap:20px;
        font-size:20px;

        .info{
            width:200px;
            text-align: right;
            color:#777;
        }

    }

    @media(max-width:1000px){
        .header-profile{
            h2{
                font-size: 20px;
            }
        }
        .name,.email{
            font-size:18px;
        }
           
    }
    @media(max-width:800px){
        margin:0 20px;  
        .name,.email{
            font-size:18px;
            .info{
                width:auto;
            }
        }      
    }
    @media(max-width:600px){
        margin:0;
        border-radius:0;
        padding:0;
        .header-profile{
            h2{
                font-size: 18px;
            }
            button{
                font-size:16px;
                padding: 5px 8px;
            }
        }
        .name,.email{
            font-size:16px;
        }
    }
    @media(max-width:380px){
        .header-profile{
            button{
                font-size:14px;
                padding: 5px 7px;
            }
            h2{
                font-size: 17px;
            }
        }
        .name,.email{
            font-size:14px;
        }
    }
    
`
export const AddressArea = styled.div`
    width: 100%;
    background-color: #F1F1F1;
    border-radius: 5px;
    padding: 10px 20px;
    flex:1;
    .header-address{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        
        h2{
            font-weight: bold;
            font-size: 25px; 
        }

        button{
            border: 0;
            background-color: #FA5230;
            box-shadow: 4px 5px 0px #999;
            color: #FFF;
            font-size:17px;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap:10px;
            
            span{
                font-size:25px;
            }
            &:hover{
                opacity:0.9;
            }
        }
    }
    h4{
        font-weight: bold;
        font-size: 20px;
        padding: 20px 0 ;
    }
    @media(max-width:1000px){
        .header-address{    
            h2{
                font-size: 20px; 
            } 
            button{
                font-size:15px; 
            }   
        }
    }
    @media(max-width:800px){
        margin:0 20px;    
        width:auto;    
    }
    @media(max-width:600px){
        margin:0;    
        border-radius: 0;
        padding: 25px ;
        gap:35px; 
        .header-address{  
            h2{
                font-size: 17px;
                padding-right: 40px; 
            } 
            button{
                font-size:14px; 
            }   
        }
        h4{
            font-size: 17px;
            padding:15px ;  
        }

    }
    @media(max-width:400px){
        .header-address{  
            h2{
                font-size: 16px;
                padding-right: 40px; 
            } 
            button{
                font-size:13px; 
            }   
        }
        h4{
            font-size: 16px; 
        }

    }
    
`
export const GridArea = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    
`
export const Address = styled.div`
    display: flex;
    gap:40px;
    padding:20px;
    justify-content: space-between;

    @media(max-width:600px){
        flex-direction: column;
        border-bottom:solid 1px #666;
    }


`
type propsInfoAdress = {
    mainAddress?:boolean
}
export const InfoAddress = styled.div<propsInfoAdress>`
    .name-address{
        font-size: 20px;
        font-weight: bold;
        padding:10px 0 ;
        display:flex;
        align-items: center;
        gap:10px;
       
        
        img{
            transition: all ease .5s;
            opacity:${props=>props.mainAddress?'1':'0'} ;
            width:30px;
        }
    }
    .address{
        font-size: 20px;
        padding:2.5px 0 ;
        span{
            color:#444;
            display: inline-block;
            width: 100px;
            text-align: right;
            padding-right:5px;
        }
        
    }
    @media(max-width:1000px){
        .address,.name-address{
            font-size: 18px;
            span{
                width:auto;
            }
        }
    }
    @media(max-width:1000px){
        .address,.name-address{
            font-size: 18px;
        }
    }
    @media(max-width:600px){
        .address,.name-address{
            font-size: 16px;
        }
    }
`
export const EditAddress = styled.div`
    display: flex;
    justify-content: center;
    align-items:flex-end;
    gap:10px;
    
    .area-icon{
        display: flex;
        gap:20px;
    }

    .edit{
        background-color: #136712;
        cursor: pointer;
        border-radius: 5px;
        width:30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width:20px;
        }
        &:hover{
            opacity:0.9;
        }
    }
    .delete{
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width:30px;
        }
        &:hover{
            opacity:0.9;
        }
    }
   
    .main-address{
        padding:5px 10px;
        border-radius: 3px;
        border: solid 2px #136712;
        font-size: 17px;
        color: #136712 ;
        cursor: pointer;
        box-shadow: 4px 5px 0px #999;
        text-align: center;
        &:hover{
            opacity:0.8;
        }
    }

    @media(max-width:600px){
        justify-content: end;
        .edit{
            width:28px;
            height: 28px;
            img{
                width:18px; 
            }
        }
        
        .main-address{
            font-size: 14px;
        }
    }

`

export const ModalAddressArea = styled.div`

`
