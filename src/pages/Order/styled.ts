import styled from "styled-components";

export const OrderArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    gap:30px;

    padding-bottom: 15px;  

`
export const LastOrderArea = styled.div`
    background-color: #F1F1F1;
    border-radius: 10px;
    padding:30px;
    display: flex;
    flex-direction: column;
    gap:10px;
    min-height: 250px;
    @media(max-width:800px){
       margin: 0 20px;
          
    }
    @media(max-width:400px){
        margin: 0 ;
        border-radius: 0; 
     }
`
export const AreaTitle = styled.div`
    display: flex;
    flex:1;
    color:#136712; 
    font-weight: bold;
    font-size:16px;
    
    .received{
        flex:1;
    }
    .sent{
        flex:1;
        text-align: center;
    }
    .delivered{
        flex:1;
        text-align: end;
    }

    @media(max-width:600px){
         gap:20px;
         font-size:15px; 
    }
    @media(max-width:400px){
        gap:15px;
        font-size:14px; 
   }
   @media(max-width:350px){
    gap:15px;
    font-size:12px; 
}
   
`
export const Orders = styled.div`
    flex:1;
`
export const Title = styled.div`
    flex:1;
    font-size:16px;
    color:#FFF;
    padding-bottom:10px;
    @media(max-width:800px){
        margin: 0 20px;   
    }
  
`
export const AreaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
    
    @media(max-width:1000px){
        grid-template-columns: repeat(2,1fr);
    }
    @media(max-width:800px){
        margin: 0 20px;
           
    }
    @media(max-width:620px){
        grid-template-columns: repeat(1,1fr)
           
     }


`
export const NoOrder = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap:15px;
    span{
        color:#333; 
        font-weight: bold;
        font-size:20px;
        text-align: center;
    }
    a{
        text-align: center;
        text-decoration: none;
        color:#136712; 
        font-weight: bold;
        font-size:20px;
        border: solid 2px #136712;
        padding: 5px 10px;
        border-radius: 5px;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
        transition: all ease .4s;
        &:hover{
            opacity: 0.8;
        }
    }
    @media(max-width:800px){
        margin: 0 20px;
    }
   

`