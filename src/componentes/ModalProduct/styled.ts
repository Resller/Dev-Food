import styled from "styled-components";
type propsAreaModal = {
    modal:boolean
}
type propsButton = {
    ph:number
    pw :number
    fs:number
}
export const AreaModal = styled.div< propsAreaModal>`
    display : ${props => props.modal ? 'flex':'none'};
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
export const ItemModal = styled.div`
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
    border-radius: 15px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 10px;
    
    .item{
        display: flex;
        gap: 30px;
    }
    .area-img{
        img{
            border-radius: 15px;
            width:350px;
        }
    }
    .area-info{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .info{    
            h3{
                font-size: 30px;
                font-weight: 700;
            }
            .ingredient{
                font-size: 16px;
                padding 10px 0 ;
            }
        }
       
        .area-buy{
            display: flex;
            justify-content: space-between;
            font-size: 25px;
            font-weight: 700;
            gap:15px;

            .add{
                background-color: #136712;
                color:#FFF;
                padding:5px 10px;
                border-radius: 5px;

                img{
                    width:20px;
                    cursor: pointer;
                }
                span{
                    padding:0 10px;
                }
            }
            .total{
                font-size: 28px;
                font-weight: 700;
            }
        }
    }
    
    .area-button{
        padding-top: 25px ;
        display: flex;
        justify-content: flex-end;
        align-items: end;
        gap:30px;
    }

    @media(max-width:800px){
        border-radius: 10px;
        .area-img{
            img{
                border-radius: 10px;
                width:180px;
            }
        } 
        .area-info{
            .info{    
                h3{
                    font-size: 20px;
                }
                .ingredient{
                    font-size: 14px;
                    padding 5px 0;
                }
            }
            .area-buy{
                font-size: 16px;
                .add{
                    padding:7px;
                    img{
                        width:11px;
                    }
                    span{
                        padding:0 10px;
                    }
                }
                .total{
                    display: flex;
                    align-items:center;
                    font-size: 22px;
                }
            }
        }
    }
    @media(max-width:510px){
        padding: 15px;
        .area-img{
            img{
                border-radius: 5px;
                width:100px;
            }
        } 
        .area-info{
            .info{    
                h3{
                    font-size: 16px;
                }
                .ingredient{
                    font-size: 12px;
                    padding 5px 0;
                }
            }
            .area-buy{
                font-size: 14px;
                .add{
                    padding:5px;
                    img{
                        width:8px;
                    }
                    span{
                        padding:0 7px;
                    }
                }
                .total{
                    display: flex;
                    align-items:center;
                    font-size: 16px;
                }
            }
        }
    }
    @media(max-width:350px){
        .area-img{
            img{
                border-radius: 5px;
                width:80px;
            }
        } 
        .item{
            display: flex;
            gap: 15px;
        }
        .area-info{
            gap:5px;   
            .info{ 
                h3{
                    font-size: 15px;
                }
                .ingredient{
                    font-size: 12px;
                    padding 3px 0;
                }
            }
            .area-buy{
                font-size: 12px;
                .add{
                    padding:3px;
                    img{
                        width:7px;
                    }
                    span{
                        padding:0 5px;
                    }
                }
                .total{
                    display: flex;
                    align-items:center;
                    font-size: 14px;
                }
            }
        }

    }
   
`
export const Button = styled.button <propsButton>`
    border: 0;
    background-color: #136712;
    box-shadow: 4px 5px 0px #999;
    color: #FFF;
    font-size:${props => props.fs}px;
    font-weight: bold;
    padding: ${props => props.ph}px ${props => props.pw}px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        opacity:0.9;
    } 
    
    @media(max-width:800px){
        font-size:${props => props.fs-4}px;
        padding: ${props => props.ph-5}px ${props => props.pw-5}px;
    }
    @media(max-width:500px){
        font-size:13px;
        padding: ${props => props.ph /2}px ${props => props.pw/2}px;
    }
    @media(max-width:350px){
        padding: ${props => props.ph /2.3}px ${props => props.pw/2.7}px;
    }
   

`