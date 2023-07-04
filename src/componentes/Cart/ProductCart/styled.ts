import styled from "styled-components"

export const ProductArea = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    gap:15px;
    justify-content: space-between;
    .area-img{
        img{
            width:70px;
            border-radius: 5px;
        }
    }
    .area-info-cart{
        flex:1;
        display: flex;
        flex-direction: column;
        gap:5px;
        font-weight: 600;
        font-size: 14px;
    }
    .area-add{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: end;
        font-size: 18px;
        font-weight: bold;
        gap:10px;
        img{
            width:15px;
            cursor: pointer;
        }
`