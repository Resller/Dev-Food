import styled from "styled-components";

export const SingUpArea = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .area-registre{
        border:none;
        display: flex;
        flex-direction: column;
        padding:40px;
        border-radius: 10px;
        gap: 30px;
        background-color: #F1F1F1;
    }
    .area-singUp{
        display: flex;
        gap: 55px;
    }
    .area-button{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:20px;
       
        button{
            width: 120px;
            padding: 10px 0;
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
    }

    @media(max-width:650px){
        padding:25px;
        .area-registre{
            padding:25px;
            gap: 20px;
        }
        .area-singUp{
            flex-direction: column;
            gap: 15px;
        }
        .area-button{
            flex-direction: column;
            gap: 15px;
            
            button{
                font-size: 16px;
                width: 100px  
            }
        }
         span{
            font-size: 15px;
        }
       
    }
`