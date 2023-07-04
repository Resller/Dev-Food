import styled from "styled-components";

export const AreaRegister = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    gap: 15px;
    h3{
        font-size: 25px;
        text-align: left;
        font-weight: 600;
        color: #000;
    }
    label{
        font-size: 14px;
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 8px 10px;
        border-radius: 3px;
        outline: 0;
        margin: 3px 0;
        font-size: 18px;
        border: 1px solid #777;
    }
    .error{
        width:100%;
        padding:5px;
        background-color: #F00;
        color:#FFF;
        font-size: 16px;
        border-radius: 3px;
        margin-top:-2%;

    }
    @media(max-width:650px){
        h3{
            font-size: 20px;
        } 
        label{
            font-size: 13px; 
        }
        input{
            padding:7px;
            font-size: 16px;
        }
        .error{
            font-size: 13px;
        }
    }
`