import styled from "styled-components";
type props = {
    show:boolean
}

export const AreaCart = styled.div`
    position: fixed;
    bottom:0;
    right:20px;
    background-color:#136712;
    color:#FFF;
    font-size:16px;
    padding:10px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: all ease .3s;

    @media(max-width:800px){
        right:0px;     
    }

`
export const AreaBody = styled.div<props>`
    display:${props => props.show ? 'flex':'none'};
    flex-direction: column;
    gap:15px;
    transition: all ease .3s;
    
`
export const EmptyArea = styled.div`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding:10px 0;
`
export const AreaProductCart = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:25px 0;

`
export const ProductCartArea = styled.div`
    display: flex;
    gap:15px;
`
export const Delivery = styled.div`
    font-size:17px;
    font-weight: bold;
`
export const CartAddressArea = styled.div`
    
`
export const AreaScroll = styled.div`
    max-height: 130px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    overflow: hidden;
`
export const ViewMore = styled.div`
    width:100%;
    text-align: end;
    cursor: pointer;
    &:hover{
        opacity:0.7;

    }
`


