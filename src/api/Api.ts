import { getCookie } from "typescript-cookie"
import  qs from 'qs'

const BASEURL = 'https://api.b7web.com.br/devsfood/api'

const apiPost = async (endpoint:string, body: any) => {
    if(!body.token){
        let token = getCookie('token');
        if(token){
            body.token = token
        }
    }

    let response = await fetch(BASEURL+endpoint,{
        method:'POST',
        headers: {
            'Accept':'application/json',
            'content-type' : 'application/json'           
        },
        body: JSON.stringify(body)
    })
    
    let json = await response.json();

    if(json.notalloweb){
        window.location.href= '/singin'
        return;
    }
    return json
}
export const Api = {
    getApiCategories : async (endPoint:string)=>{
        try{
            let response = await fetch(BASEURL+endPoint);
            let json = await response.json();    
            return json
        }catch(e){
            let msg = 'Erro na Pagina tente mais tarde ...'
            return msg
        } 
       
    },
    getApiProducts: async (endPoint:string,products:string,page:string,category:string) =>{
        try{
        
            let infoUrl = {search:'',page:'',category:''}
            
            if(products !== ''){
                infoUrl.search = products
            }
            if(page !== '0'){
                infoUrl.page = page
            }
            if(category !== '0'){
                infoUrl.category = category
            }
          
            let queryString = new URLSearchParams(infoUrl).toString()

            let response = await fetch(BASEURL+endPoint+'?'+queryString);
            let json = await response.json();    
            return json
        }catch(e){
            let msg = 'Erro na Pagina tente mais tarde ...'
            return msg
        } 
    },
    register : async (endPoint:string,name:string,email:string,password:string)=>{
        console.log({name,email,password})
        let json = await apiPost(endPoint,{name,email,password})
        return json
    },
    log : async (endPoint:string,email:string,password:string)=>{
        let json = await apiPost(endPoint,{email,password})
        return json
    },
    apiInfoUser: async (endpoint:string )=>{
            let token = getCookie('token');
            let body = {token}
            let response = await fetch(`${BASEURL+endpoint}?${qs.stringify(body)}`)
            let json = await response.json();     
        
            return json    
        
    }
} 
