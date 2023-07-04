import styled from "styled-components";

export const PaymentArea = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:10px;
    font-size: 16px;
    font-weight: bold;
    .payment{
        display: flex;
        justify-content: space-between;
        align-items:center;

    }
`
export const CartButton = styled.button`
    border: 0;
    background-color:#00980D;
    box-shadow: 4px 5px 0px #888;
    color: #FFF;
    font-size:18px;
    font-weight: bold;
    padding:10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        opacity:0.7;
    }
`