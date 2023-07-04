import styled from "styled-components";

type propsSearch = {
    activeSearch:boolean
    img:string
}

export const AreaSearch  = styled.div<propsSearch>`
    width: 100%;
    height: 100px;
    display: flex;
    background-color: #136712;
    border-radius: 5px;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
   
    .area-logo{
        flex:2;
        .logo{
            width:160px;
        }
    }
    .area-search{
        transition: all ease 0.5s;
       
        .area-input{ 
            transition: all ease 0.5s;
            
            input{
                width: ${props=> props.activeSearch ? '320px': '45px'};
                height: 45px;
                border-radius:${props=> props.activeSearch ? '10px': '50%'};
                outline: 0;
                border: 0;
                font-size: 16px;
                padding-left: 50px;
                background-image: url(${props => props.img});
                background-position: 10px center;
                background-repeat: no-repeat;
                background-size: 30px;  
                transition: all ease 0.5s;
                cursor: pointer;

                &:focus{
                    cursor: text;
                }
            }
        }          
        
    }
    @media(max-width:800px){
        height: 70px;
        border-radius: 0;
        .area-logo{
            display: flex;
            align-items:center;
            gap:40px;
            .logo{
                width:120px;
            }
        }
        .area-search{
            .area-input{ 
                input{
                    width: ${props=> props.activeSearch ? '200px': '35px'};
                    height: 35px;
                    background-size: 20px;  
                    padding-left: 35px;
                    font-size: 14px;
                }
            }          
    
        }
    }
    @media(max-width:500px){
        flex-direction: column;
        height: auto;
        padding:10px 20px;
        gap:10px;
        .area-logo{
            width:100%;
            display: flex;
            justify-content: space-between;
            .logo{
                width:100px;
            }
        }
        .area-search{
            width:100%;
            margin-left:auto;
            .area-input{
                display:flex; 
                justify-content: end;
                input{
                    width: ${props=> props.activeSearch ? '85%': '30px'};
                    height: 33px;
                    background-size: 15px;  
                    padding-left: 33px;
                }
                
            }          
        }
    }
   
`