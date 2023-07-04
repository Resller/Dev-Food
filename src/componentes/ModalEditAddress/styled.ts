import styled from "styled-components";
type propsAreaModal = {
    modal:boolean
}
type propsButton = {
    ph:number
    pw :number
    fs:number
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
    
`

export const CloseArea = styled.div`
    width: 100%;
    text-align: end;
    width: 100%;
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