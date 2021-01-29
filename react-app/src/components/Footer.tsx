import React from 'react';

const Footer: React.FC<any> = props =>{
    return (
        <div className="container-fluid">
            <hr />
            <p className="text-center">Power BY { props.name } | Contract sangsuk_w@hotmail.com</p>
        </div>
    )
}

export default Footer;