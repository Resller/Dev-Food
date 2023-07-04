import styled from "styled-components";

export const AreaLastOrder = styled.div`
    display: flex;
    padding-top:30px;

    @media(max-width:800px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        row-gap: 30px;      
    }
    @media(max-width:510px){
        display: flex;
        flex-direction: column;
    }
`
export const ProductArea = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap:10px;

`
export const Product = styled.div`
    display: flex;
    gap:20px;
    
    .area-img{
        img{
            width:70px;
            border-radius: 5px;
        }
    }
    .area-info{
        display: flex;
        flex-direction: column;
        gap:6px;
        font-size:14px;
        color:#136712;

        .name{
            font-weight: bold;
        }
    }
`
export const InfoArea = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    font-size:14px;
    @media(max-width:800px){
        justify-content: end;
    }
    @media(max-width:510px){

    }
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    color:#136712;
    margin-left:50px;
    @media(max-width:510px){
        flex:1;
        flex-direction: row;
        justify-content: space-between;
        margin:0;
    }
    
`
export const DateArea = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
`
export const AddressArea = styled.div`
    display: flex;
    flex-direction: column;
    gap:3px;
`
export const PaymentArea = styled.div`
    flex:1;
    color:#136712;
    display:flex;
    flex-direction: column;
    align-items: end;
    gap:15px;
    font-size:14px;

    .discount,.delivery,.total{  
        width: 70%;
        display:flex;
        justify-content: space-between;
        font-weight: bold;
        font-size:14px;
    }

    @media(max-width:800px){
        grid-column-start: 1;
        grid-column-end: 3;
        gap:10px;
        .discount,.delivery,.total{
            width: 50%;
        }
    }
    @media(max-width:510px){
        .discount,.delivery,.total{  
            width: 100%;
        
        }
    }
`
