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
                orders.map((order: any)=>{
                    console.log(order)
                    return <p key={order.product.productId}>{order.product.productName} | {order.unitPrice} x {order.quantity} = {order.quantity*order.product.unitPrice}</p>
                })
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