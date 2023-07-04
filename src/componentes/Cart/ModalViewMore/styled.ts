import styled from "styled-components";

export const AreaModal =styled.div`
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
export const Modal =styled.div`
    border-radius: 15px;
    background-color: #136712;
    display: flex;
    flex-direction: column;
    gap:20px;
    padding: 20px 30px;
`
export const HeaderArea =styled.div`
    display: flex;
    justify-content: space-between;
`
export const Title =styled.div`
    color:#FFF;
    font-size: 18px;
    font-weight: bold;
`
export const CloseModal =styled.div`
    color:#d10000;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        opacity:0.7;
    }
`
export const AreaProduct = styled.div`
    
`
export const CloseModalButton =styled.button`
    border: 0;
    background-color:#d10000;
    box-shadow: 2px 3px 0px #777;
    color: #FFF;
    font-size:18px;
    font-weight: bold;
    padding:5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left:auto;
    margin-top:20px;

    &:hover{
        opacity:0.7;
    }
`
