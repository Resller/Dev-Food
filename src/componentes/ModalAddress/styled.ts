import styled from "styled-components";

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
export const FormModalAddress = styled.form`
    border-radius: 15px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    padding: 25px;
   
    .area-button{
        padding-top: 25px ;
        display: flex;
        justify-content: flex-end;
        align-items: end;
        
    }
    .error{
        padding:5px;
        background-color: #F00;
        color:#FFF;
        font-size: 16px;
        border-radius: 5px;
        margin-top:20px;

    }
   
`
export const Button = styled.button`
    border: 0;
    background-color: #136712;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size:20px;
    font-weight: bold;
    padding:10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        opacity:0.9;
    }
    
`

export const CloseArea = styled.div`
    width: 100%;
    text-align: end;
    text-align: end;
    color: #F00;
    font-size: 20px;
    font-weight: bold;


    span{
        cursor: pointer;

        &:hover{
            opacity:0.6
        }
    }
`