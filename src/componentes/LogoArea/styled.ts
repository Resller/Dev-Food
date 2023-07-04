import styled from "styled-components";

export const AreaLogo  = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #136712;
    border-radius: 5px;
    padding:20px;
    gap:40px;

    .logo{
        width:150px;
    }

    span{
        line-height: 23px;
        font-size: 17px;
    }
    @media(max-width:800px){
        height: 70px;
        border-radius: 0;
        padding:20px;
        .area-logo{
            .logo{
                width:120px;
            } 
        }
    }
    
    @media(max-width:500px){
       
        .area-logo{
            
            flex:1;
            display: flex;
            align-items: center;
            justify-content: end;
            
            .logo{
                width:100px;
            }
        }
       
    }
`