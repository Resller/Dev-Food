import { useEffect, useState } from "react"
import { 
    AreaTimeline,
    Received,
    Sent,
    Delivered

 } from "./styled"
 
 type props = {
    received:boolean,
    sent:boolean,
    delivered:boolean
 }

export default ({received,sent,delivered}:props)=>{
   
    
    return(
        <AreaTimeline>
            <Received received={received} sent={sent} >
                <div className="ball"></div>
                <div className="area-bar">
                <div className="completed"></div>
                <div className="en-route"></div>
                </div> 
            </Received>
            <Sent sent={sent} delivered={delivered}>
                <div className="ball"></div>
                <div className="area-bar">
                <div className="completed"></div>
                <div className="en-route"></div>
                </div> 
            </Sent >
            <Delivered delivered={delivered}>
                <div className="ball"></div>
            </Delivered>
        </AreaTimeline>
    )
}