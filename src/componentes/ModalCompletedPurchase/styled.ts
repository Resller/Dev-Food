import styled from "styled-components";
type propsAreaModal = {
    modal:boolean
}

export const AreaModalAddress = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.7);
    
`
export const Modal = styled.div`
    border-radius: 15px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap:30px;
    
    .area-img{
        flex:1;
        display : flex;
        align-items: center;
        justify-content: center;
        
        img{
            width: 100px;
        }
    }
    .txt{
        display: flex;
        flex-direction: column;
        gap:5px;
        color:#000;
        text-align:center;
        font-size:20px;
    }
    @media(max-width:600px){
        border-radius: 10px;
        padding: 20px;
        .area-img{
            img{
                width: 70px;
            }
        }
        .txt{
            font-size:17px;
        }
    }
    @media(max-width:370px){
        border-radius: 5px;
        padding: 10px;
        .area-img{
            img{
                width: 60px;
            }
        }
        .txt{
            font-size:15px;
        }
    }

`
export const Button = styled.button`
    width: 40%;
    margin: auto;
    border: 0;
    background-color: #D10000;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size:18px;
    font-weight: bold;
    padding:10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        opacity:0.9;
    }
    @media(max-width:600px){
        font-size:16px;
        width: 35%;
        padding:7px
    }
    @media(max-width:360px){
        font-size:15px;
    }
`