import styled from "styled-components";

type props={
    received?:boolean,
    sent?:boolean,
    delivered?:boolean,
}

export const AreaTimeline = styled.div`
    display: flex;
    flex:1;
`
export const Received = styled.div<props>`
    display: flex;
    flex:1;
    align-items:center;
    .ball{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: solid 3px #136712;
        background-color: ${props=>props.received?'#136712':'transparent'};
    }
    .area-bar{
        display: flex;
        flex:1;
        align-items:center;
    
        .completed{
            flex:${props=>props.received?'1':'none'};
            height: 3px;
            background-color: #136712;
        }
        .en-route{
            flex:${props=>props.sent?'none':'1'};
            height: 1px;
            background-color: #136712;
        }
       
    }

    @media(max-width:600px){
        .ball{
            width: 15px;
            height: 15px;
            border: solid 2px #136712;
        }
    }
`
export const Sent = styled.div<props>`
    display: flex;
    flex:1;
    align-items:center;
    .ball{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: solid 3px #136712;
        background-color: ${props=>props.sent?'#136712':'transparent'};
    }
    .area-bar{
        display: flex;
        flex:1;
        align-items:center;
        .completed{
            flex:${props=>props.sent?'1':'none'};
            height: 3px;
            background-color: #136712;
        }
        .en-route{
            flex:${props=>props.delivered?'none':'1'};
            height: 1px;
            background-color: #136712;
        }
       
    }
    @media(max-width:600px){
        .ball{
            width: 15px;
            height: 15px;
            border: solid 2px #136712;
        }
    }
`
export const Delivered = styled.div<props>`
    display: flex;
    align-items:center;
    .ball{
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: solid 3px #136712;
        background-color: ${props=>props.delivered?'#136712':'transparent'};
    }
    @media(max-width:600px){
        .ball{
            width: 15px;
            height: 15px;
            border: solid 2px #136712;
        }
    }
  
`