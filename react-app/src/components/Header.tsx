import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () =>{
    const [date, setDate] = useState(new Date());
    
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date());
        }, 1000)
    })
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h1>Hello World!.</h1>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 text-right">
                        <p className ="text-right">{ date.toLocaleTimeString()}</p>
                        </div>
                        <div className="col-12 text-right">
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/">หน้าแรก</Link></li>
                                <li className="list-inline-item">|</li>
                                <li className="list-inline-item"><Link to="/">สินค้า</Link></li>
                                <li className="list-inline-item">|</li>
                                <li className="list-inline-item"><Link to="/about">เกี่ยวกับเรา</Link></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
            <hr />
        </div>
    )
    
}




export default Header;