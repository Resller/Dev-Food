import styled from "styled-components"

export const MenuMobile = styled.div`
    display:none;
    z-index: 999;
    @media(max-width:800px){
        display: flex;
        cursor: pointer;
        img{
            width: 30px;
        }
    }
    @media(max-width:500px){
        img{
            width: 25px;
        }
    }

`