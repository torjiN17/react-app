import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {

    return(
        <div className="container-fluid">
            <Header></Header>
            <p className="text-center">
                ยินดีต้อนรับสู่ my-react-first-web-application
            </p>
            <Footer name="torjin sama" />
        </div>
    )
}

export default About;