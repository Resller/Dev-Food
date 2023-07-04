import styled from "styled-components";
type props = {
    menu:boolean
}
export const AreaHeader = styled.div<props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #136712;
    color: #FFF;
    width:80px;
    transition: all ease .4s;


    a.active{
        background-color:#034407;
    }

    .area-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 50px;
        background-color: transparent;
        border-radius: 7px;
        cursor: pointer;

        &:hover{
            background-color: #034407;

        }
        img{
            width: 30px;
            object-fit: cover;
        }
    }
    @media(max-width:800px){
        width:70px;
        position: absolute;
        top:0px;
        bottom:0;
        margin-left:${props=>props.menu?'0px':'-70px'};
        .area-icon{
            width: 45px;
            height: 40px; 
            img{
                width: 25px;
            }
        }
    }
`
