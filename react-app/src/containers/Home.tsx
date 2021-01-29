import React from 'react'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Moniter from '../components/Moniter';

const Home = () =>{

    return (
        <div className="container-fluid">
            <Header />
            <Moniter />
            <Footer name="torjin sama" />
        </div>
    )
}
Home.title = "Home"
export default Home;