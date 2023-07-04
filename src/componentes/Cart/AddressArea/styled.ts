import styled from "styled-components";
type props = {
    show:boolean
}

export const Contanier = styled.div`
    .area-info{
        display: flex;
        justify-content: space-between;
        align-items:center;
        .info{
            display: flex;
            flex-direction: column;
            gap:3px;
            font-size: 15px;
        }
        .edit{
            img{
                width:20px;
                cursor: pointer;
            }
        }
        
    }

`