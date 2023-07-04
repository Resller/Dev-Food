import { Category } from "./styled"


import { CategoriesType } from "../../types/MainTypes";

type props = {
   data:CategoriesType,
   id:number,
   setActiveCategory : (id:number)=> void,
   txt:string
}
export const Categories  = ({data,id,setActiveCategory,txt}:props)=>{
   const handleCategoryClick =()=>{
    setActiveCategory(data.id)
   }
   
    return(
        <Category data-tooltip-id = 'tip-top' data-tooltip-content={txt} active={id} itemId={data.id} onClick={handleCategoryClick}>  
            <img src={data.image} alt={data.name} />
        </Category>
    )
}