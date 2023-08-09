import React from "react";

import portada from '../assets/portada.jpg'
import ButtonLink from "../utilities/ButtonLink";

const Hero = () => {
    return (
<div className="container bg-amber-50  mx-auto pt-6 flex flex-col lg:flex-row items-center justify-center">
  <div className="w-full lg:w-1/2">
    <div className="flex flex-col space-y-6 items-center lg:items-start lg:ml-20 lg:mr-10">
      <h2 className="text-4xl font-bold text-gray-800 px-6 lg:px-20 text-center lg:text-left">¡Encuentra las playeras con los diseños más chidos de México!</h2>
      <h3 className="text-l font-semibold text-gray-800 px-6 lg:px-20 text-center lg:text-left">¡Dale un giro a tu armario y llévate las playeras de la mejor calidad y con el mejor estampado de México!</h3>
     <div>
     <ButtonLink text="Ver más" to="/Products" />
     </div>
    
    </div>
  </div>
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-6 lg:mt-0 ">
    <img
      className="block h-auto w-full max-w-xs lg:max-w-full sm:w-[50%]"
      src={portada}
      alt="logo"
      style={{ width: 'auto', height: '500px', borderRadius: '150px 0% 0% 0%' }}
    />
  </div>
</div>
    );
}

export default Hero;