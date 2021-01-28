import React from 'react';
import { Product } from '../../models/model'

const ProductItem: React.FC<any> = (props: any) => {
    const { product, onAddOrder} = props;
    return (
        <div className="col-md-3">
            <h1>{ product.productName }</h1>
            <h2>{ product.unitPrice }</h2>
            <img className="img-fluid" src={product.thumbnail} alt=""/>
            <div className="row">
                <button className="btn btn-block btn-success" onClick={()=> onAddOrder(product)}>เลือก</button>
            </div>
            <hr />
        </div>
    )
}
export default ProductItem;