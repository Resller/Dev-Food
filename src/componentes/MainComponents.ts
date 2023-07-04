import styled from "styled-components";

type propsContanier ={
    img :string
}


export const Template = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

`
export const Contanier = styled.div<propsContanier>`
    display: flex;
    flex:1;
    flex-direction: column;
    padding :20px;
    gap:20px;
    background-color: #00990d;
    background-image: url(${props => props.img});
    overflow-y: auto;

    @media(max-width:800px){
        padding :0px;        
    }
   
`