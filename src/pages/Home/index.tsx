import { useEffect, useState,useContext } from "react";
import { Context } from "../../contexts/Context";

import { HomeArea,AreaProducts,PageArea,Page,ModalArea } from "./styled";

import { Api } from "../../api/Api";

import allItem from '../../img/food-and-restaurant.png'

import { Search } from "../../componentes/Search";
import { Categories } from "../../componentes/Categories";
import { Modal } from "../../componentes/ModalProduct"; 
import { Product } from "../../componentes/Product";
import { Cart } from "../../componentes/Cart/Main";

import { CategoriesType , ProductsType} from "../../types/MainTypes";

export const Home = ()=>{
    const {state,dispatch} = useContext(Context)
    const [category,setCategory] = useState<CategoriesType[]>([]);
    const [product,setProduct] = useState<ProductsType>();
    const [activeCategory,setActiveCategory] = useState<number>(0);
    const [activePage,setActivePage] = useState<number>(1);
    const [totalPages,setTotalPages] = useState<number>(0)
    const [itemModal,setItemModal] = useState();
    const [activeModal,setActiveModal] =useState<boolean>(false);


    const getProducts = async ()=>{
        let newproduct = await Api.getApiProducts('/products',state.search.product,activePage.toString(),activeCategory.toString());
        setProduct(newproduct);
        setTotalPages(newproduct.result.pages)
    }
    useEffect (()=>{
        setProduct({error:'',
            result:{
                total: 0,
                page : 0,
                pages: 0,
                data:[]
            }})
        getProducts();
   },[activeCategory,activePage,state.search.product])
   
   useEffect(()=>{
        const getCategories = async ()=>{
            let categories = await Api.getApiCategories('/categories');
            setCategory(categories.result);
        }
        getCategories();
   },[])
    return(
        <>
            <Search/>
            <HomeArea>
                <div className="area-h2">
                    <h2>Selecione uma categoria</h2>
                </div>
                {category && 
                    <div className="categories-area">
                        <Categories 
                            data={{id:0,name:'Todas as Categorias',image:allItem}} 
                            id={activeCategory} 
                            setActiveCategory = {setActiveCategory}
                            txt = 'Todas as Categorias'
                        />
                        {category.map((i,k)=>(
                            <Categories key={k} data={i} id ={activeCategory} setActiveCategory = {setActiveCategory} txt={i.name}/>
                        ))}
                    </div>
                }
                {product?.result.data && 
                    <AreaProducts>
                        {product?.result.data.map((i,k)=>(
                        <Product key={k} data={i} itemModalFunc={setItemModal} activeModalFunc = {setActiveModal} />
                        ))}
                    </AreaProducts>
                }
                <PageArea>
                    {Array(totalPages).fill(0).map((item,index)=>(
                        <Page 
                            index={index} 
                            page={activePage} 
                            key={index}
                            onClick={()=>setActivePage(index)}
                        >
                            {index + 1}
                        </Page>
                    ))}
                </PageArea>
                <Cart/>
                <ModalArea>
                    {itemModal && 
                    <Modal data={itemModal} activeModal={activeModal}  setActiveModal={setActiveModal}/>
                    }
                </ModalArea>
            </HomeArea>
        </>
    )
}