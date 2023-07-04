import styled from "styled-components";

type props = {
    page:number,
    index:number
}

export const HomeArea = styled.div`
    width: 100%;

    .area-h2{
        h2{
            color:#FFF;
            font-size: 15px;
        }
    }
    .categories-area{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        padding:15px 0;
    }

    @media(max-width:800px){
        .area-h2{
            h2{
               padding:0 20px;
            }
        }
        .categories-area{
            padding:20px;
        }   
    }
    @media(max-width:500px){
            
    }
`

export const AreaProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
    @media(max-width:1000px){
        grid-template-columns: repeat(2,1fr);
    }
    @media(max-width:800px){
        padding:0 20px;
    }
    @media(max-width:500px){
        grid-template-columns: repeat(1,1fr) 
    }

`
export const PageArea = styled.div`
    width:100%;
    padding:30px 0;
    display: flex;
    gap:10px;

    @media(max-width:800px){
        padding:20px;
    }
   
`
export const Page = styled.div<props>`
    transition: all ease .3s;
    background-color: ${props => props.page === props.index ? '#CCC':'#FFF'};
    padding: 6px 10px;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &:hover{
        background-color:#CCC};
    }

`
export const ModalArea = styled.div`
`