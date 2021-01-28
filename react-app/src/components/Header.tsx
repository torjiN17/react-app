import React, { Component, useState, useEffect } from 'react';

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
                <div className="col-md-6 text-right">
                    <h1>{ date.toLocaleTimeString()}</h1>
                </div>
            </div>
        </div>
    )
    
}




export default Header;