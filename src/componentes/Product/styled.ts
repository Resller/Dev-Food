import styled from "styled-components";

export const AreaProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    color: #136712;
    padding:10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;

    .area-img{

        img{
            width: 100px;
            border-radius: 5px;
        }
    }

    .area-info{
        flex:1;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap:5px;

        h3{
            font-size: 18px;
            font-weight: 700;
        }
        .ingredient{
            font-size: 14px;
            padding: 2px 0;
        }
    }
    .area-next{
        img{
            width: 20px;
             cursor: pointer;
        }
    }

    @media(max-width:800px){
        .area-img{

            img{
                width: 70px;
            }
        }
        .area-info{
            h3{
                font-size: 15px;
                
            }
            .ingredient{
                font-size: 13px;
                
            }
        }
    }
`