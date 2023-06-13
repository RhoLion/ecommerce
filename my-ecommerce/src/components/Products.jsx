import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Card from "./Card";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const url = `https://64851bfea795d24810b6b694.mockapi.io/api/v1/products?p=${currentPage}&l=5`;
    const [products, setProducts] = useState([]);

     const getProducts = () => {
        fetch(url)
        .then(response => response.json()) 
        .then(fetchProducts => {
            setProducts(fetchProducts);
        });
    };
useEffect(()=>{
    getProducts(url)
}, [currentPage])

    return (
        <div className="container mx-auto bg-amber-50">
        <section className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-800 px-6 sm:px-8 lg:px-20 text-center lg:text-left mt-10  ">
                 Productos más vendidos
              </h2>
            <div className="flex flex-row justify-between">
             <h4 className="text-l font-semibold text-gray-800 px-6 sm:px-8 lg:px-20 text-center lg:text-left mt-6 mb-10">
                 Ve todos los productos que tenemos para ti...
             </h4>
            <NavLink to="/Products" className="flex items-center justify-center mt-6 mr-20 lg:mt-0 ml-6 lg:ml-20 rounded-full border-2 font-bold text-center border-black px-4 py-2 text-black hover:text-white hover:bg-green-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-black w-[200px] h-[50px]">
            Ver todo
            </NavLink>
            </div>
        </section>
      
        <div className="flex justify-start bg-amber-50 items-center justify-center overflow-x-auto">
          <div className="flex flex-row">
            {products &&
              products.map((item) => (
                <Card key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>

    );
}

export default Products;