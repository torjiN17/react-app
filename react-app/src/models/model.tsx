export interface Product{
    productId: number, 
    productName: string,
    unitPrice: string,
    thumbnail: string 
}

export interface Orders{
    product: Product,
    quantity: number
}
