import React, { Component } from 'react';

const Calculate: React.FC<any> = (props: any) => {
    const { orders, totalPrice } = props;
    console.log(orders)
    return (
        <div className="container-fluid">
            <h3 className="text-right">รายการสั่งซื้อ</h3>
            <p className="text-right">ราคา {totalPrice } บาท</p>
            <hr /> 
            {
                orders && orders.map((order: any)=>{
                    console.log(order)
                    return (
                        <div>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                <p key={order.product.productId}>{order.product.productName} | {order.unitPrice} x {order.quantity} = {order.quantity*order.product.unitPrice}</p>
                                </li>
                                <li className="list-inline-item float-right">
                                <button className="btn btn-white btn-sm" onClick={()=> props.onDelOrder(order.product)}>X</button>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
            {
                (orders.length==0 ) && <p className="text-right">ไม่มีรายการสินค้า</p>
            }
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-block btn-success">ยืนยัน</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-block btn-secondary">ยกเลิก</button>
                </div>
            </div>
        </div>
           
    )
}

export default Calculate;