import React from 'react';

const Footer: React.FC<any> = props =>{
    return (
        <div>
            <h3>Power BY { props.name }</h3>
        </div>
    )
}

export default Footer;