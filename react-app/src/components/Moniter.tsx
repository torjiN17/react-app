import React, { useEffect, useState } from 'react';
import ProductList from './products/ProductList';
import { Product, Orders } from '../models/model';
import Calculate from '../components/Calculate';
const Moniter = () =>{
    const [products, setProducts]  = useState<Product[]>([]);
    const [orders, addOrder] = useState<Orders[]>([]);
    const [totalPrice, addTotalPrice ] = useState<number>(0);
    const onAddOrder = (product: Product) => {
        let findOrder = orders.find(order => order.product.productId == product.productId);
        if(findOrder){
            findOrder.quantity ++;
        }else{
            orders.push({product: product, quantity: 1})
        }
        const calTotalPrice: number = totalPrice + parseInt(product.unitPrice);
        addTotalPrice(calTotalPrice);
    }
    
    const productList = [
        { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
        { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
        { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
        { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
        { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
        { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
    ];
    useEffect( () => {
        setProducts(productList);
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <ProductList products={products}  onAddOrder={onAddOrder} />
                </div>
                <div className="col-md-3">
                    <Calculate orders={orders} totalPrice={totalPrice} />
                </div>
            </div>
            
        </div>
    )
}

const s = (product: Product) =>{
    
}



export default Moniter;