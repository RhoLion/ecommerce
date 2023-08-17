import React from "react";

import Title from "../utilities/Title";
import Subtitle from "../utilities/Subtitle";
import ImageCube from "./ImageCube";

const Information = () => {
  return (
    <div className="container mx-auto bg-amber-50">
      <div className="flex flex-col lg:flex-row lg:pt-10 lg:py-10" >
        <div className="lg:ml-60 mt-40 lg:mr-60 lg:mb-auto">
         <ImageCube />
        </div>
       <div className=" ml-10 mr-10 mt-20 text-center" >
         <Title text="Proceso de diseño" />
        <Subtitle text="El proceso de crear los diseños impresos en nuestras playeras combina creatividad y técnica para lograr resultados que reflejen la personalidad de nuestra marca. Comienza con la búsqueda de ideas a partir de tendencias y nuestro público. Luego, los bocetos cobran vida en la computadora, ajustando colores y detalles. Una vez aprobado, entramos en la etapa de producción, donde preparamos cuidadosamente la impresión en las playeras, eligiendo la mejor técnica y asegurando calidad. Tras pruebas y controles, imprimimos las playeras listas para usar, manteniendo siempre nuestra atención en la calidad y el estilo que nos caracterizan." />
      </div> 
    </div>
  </div>
  );
}

export default Information;
