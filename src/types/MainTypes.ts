
type ProductsResultType = {
    total : number,
    page : number,
    pages : number,
    data: ProductsDataType[]  
}


export type CategoriesType = {
    id:number,
    name : string,
    image:string
}

export type ProductsDataType ={
    id:number,
    id_cat: number,
    name: string,
    image: string,
    price: number,
    ingredients: string,
    points: number
}

export type ProductsType = {
    error: string,
    result: ProductsResultType,
}
