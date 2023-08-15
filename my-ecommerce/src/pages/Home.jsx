import React, { Component } from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Promotions from '../components/Promotions';
import Information from '../components/Information';

class Home extends Component {
    render() {
        return (
            <div className='bg-amber50'>
                <Layout  />
                <Hero/>
                <Products/>
                <Promotions/>
                <Information/>

            </div>
        );
    }
}

export default Home;