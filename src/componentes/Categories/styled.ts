import styled from "styled-components";

type props ={
    active :number,
    itemId:number
}


export const Category = styled.div<props>` 
    padding:10px;
    background-color: ${props => props.active === props.itemId ? '#FFF':'#a1e598' };
    border-radius: 10px;
    cursor: pointer;
    transition: all ease .3s;
    
    img{
        width: 45px;
    }
          
    &:hover{
        background-color: #FFF;
    }
    
    @media(max-width:1000px){
        img{
            width: 30px;
         
    }
    

`