import React, { useEffect, useState } from "react";

import ButtonLink from "../utilities/ButtonLink";
import Card from "./Card";
import Title from "../utilities/Title";
import Subtitle from "../utilities/Subtitle";

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
          <Title text="Productos más vendidos"/>
            <div className="flex flex-row justify-between">
              <Subtitle text="Ve todos los productos que tenemos para ti..." />
              <ButtonLink className="mr-40" text="Ver todo" to="/Products" />
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