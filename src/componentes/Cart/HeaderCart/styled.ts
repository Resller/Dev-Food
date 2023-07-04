import styled from "styled-components";
type props = {
    show:boolean
}

export const AreaHeader = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
    cursor: pointer;
    transition: all ease .3s;
    img{
        width: 25px;
        object-fit: cover;
    }
    .info-cart{
        display: flex;
        gap:5px;
        font-weight: 400;
    }

`
export const AreaCloseCart = styled.div<props>`
   flex:1;
    min-width: 65px;
    display: flex;
    justify-content: end;

    img{
        width: 20px;
        display:${props => props.show ? 'flex':'none'};
    }
`