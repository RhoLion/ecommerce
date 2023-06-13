import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';

class Home extends Component {
    render() {
        return (
            <div className='bg-amber50'>
                <Layout />
                <Hero/>
                <Products/>
            </div>
        );
    }
}

export default Home;