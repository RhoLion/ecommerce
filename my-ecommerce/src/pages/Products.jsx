import React, { Component } from 'react';
import error from '../assets/error.jpg'
import Layout from '../components/Layout';

class Products extends Component {
    render() {
        return (
            <div>
                 <Layout/>
                 <div className="flex flex-col justify-center  items-center mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800">¡Estamos trabajando en Productos!</h2>
                  <img
                    className="block item-center h-auto w-42 lg:hidden"
                    src={ error }
                    alt="logo"
                  />
                  <img
                    className="hidden item-center h-auto w-96 lg:block"
                    src={ error }
                    alt="logo"
                  />
                </div>
            </div>
        );
    }
}

export default Products;