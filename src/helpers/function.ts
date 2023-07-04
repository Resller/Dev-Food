import { getCookie } from "typescript-cookie"
import { ProductCartType } from "../types/Cartypes";
import { InitialStateAddressType } from "../types/address";

export const helpersFunction = {
    
    isLogged : ()=>{
        let token = getCookie('token');
        return token ? true :false
    },
    getListAddress : (key:number)=>{
        let newKey = key.toString();
        const storage = localStorage.getItem(newKey)   
        if(storage){
            return JSON.parse(storage)
        }else{
            return false
        }
    },
    doCalculation : (Discount:number,productCart:ProductCartType[],Delivery?:number)=>{
        
        let total = 0
        let totalDiscount = 0
        for(let i = 0; i < productCart.length;i++){
            let productValue =  productCart[i].price * productCart[i].qtItem
            total += productValue
        }
        if(Discount > 0){
            totalDiscount = total * (Discount/100)
            total = total -  totalDiscount 
        }
        if(Delivery){
            total = total - Delivery
        }
       
        return [totalDiscount.toFixed(2),total.toFixed(2)]
        
    },
    formatName : (name:string)=>{
        let newName = name.charAt(0).toUpperCase() + name.substring(1)
        return newName
    },
    getDate : ()=>{
        let date = new Date()

        let day = date.getDate();
        let month = (date.getMonth()+1);
        let year = date.getFullYear();

        let newday = day < 10 ? '0'+day:day;
        let newmonth = month < 10 ? '0'+month:month;

        return `${newday}/${newmonth}/${year}`
    },
    getMainAddress:(listAddress:InitialStateAddressType[])=>{
        for(let i in listAddress){
            if(listAddress[i].mainAddress){
                return listAddress[i]
            }
        }
        return false
    }      
}
