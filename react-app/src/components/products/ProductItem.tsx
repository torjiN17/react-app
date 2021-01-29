import React from 'react';
import { Product } from '../../models/model'

const ProductItem: React.FC<any> = (props: any) => {
    const { product, onAddOrder} = props;
    return (
        <div className="col-md-3">
            <h4>{ product.productName }</h4>
            
            <img className="img-fluid" src={product.thumbnail} alt=""/>
            <p className="text-right">{ product.unitPrice } บาท</p>
            <button className="btn btn-block btn-success" onClick={()=> onAddOrder(product)}>เลือก</button>
            
            <hr />
        </div>
    )
}
export default ProductItem;