import React, { Component } from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Promotions from '../components/Promotions';
import Information from '../components/Information';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return (
            <div className='bg-amber50'>
                <Layout />
                <Hero />
                <Products />
                <Promotions />
                <Information />
                <Subscribe />
                <Footer />
            </div>
        );
    }
}

export default Home;