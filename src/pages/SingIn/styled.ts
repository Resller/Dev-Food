import styled from "styled-components";

export const SingInArea = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

    .area-login{
        border:none;
        display: flex;
        flex-direction: column;
        padding:20px 30px;
        border-radius: 10px;
        gap: 15px;
        background-color: #F1F1F1;
    
    }
    h3{
        font-size: 40px;
        text-align: center;
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
    button{
        width: 90px;
        padding: 5px;
        font-size: 18px;
        border-radius: 3px;
        border: 0;
        background-color: #136712;
        box-shadow: 4px 5px 0px #999;
        color: #FFF;
        cursor: pointer;
        transition: all ease .3s;
        
        &:hover{
            opacity: 0.9;
        }
    }
    span{
        line-height: 23px;
        font-size: 17px;
    }
    a{
        text-decoration: none;
        color:#293361;
        font-weight: 600;
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
            font-size: 27px;
        } 
        label{
            font-size: 14px; 
        }
        input{
            padding:7px;
            font-size: 16px;
        }
        span{
            
            font-size: 14px;
        }
        .error{
            font-size: 13px;
        }
    }
`