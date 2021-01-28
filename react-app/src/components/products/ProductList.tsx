
import React, { Component, useEffect, useState} from 'react';
import ProductItem from './ProductItem';
import { Product } from '../../models/model';

const ProductList: React.FC<any> = (props: any) =>{
    const  {products, onAddOrder}  = props;
    return (
        <div className="row">
            {
                products.map((product: any) => {
                    return <ProductItem key={product.productId} product={product}  onAddOrder={onAddOrder} />;
                })
            }
        </div>
    )
}

// class ProductList extends Component<any, any>{
//     constructor(props: any){
//         super(props);
//     }
//     renderProduct(products: any[]){
//         return products.map(product=>{
//             return <ProductItem key={product.productId} {...product} />
//         })

//     }
    
//     render() {
//         return (
//             <div className="row">
//                 { this.renderProduct(this.props.products) }
//                 {this.props.name }
//             </div>
//         )
//     }
// }
   

export default ProductList;