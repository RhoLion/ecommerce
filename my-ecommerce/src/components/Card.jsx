import React from 'react';



const Card = ({ item }) => {
  return (
    <>
  <div className=" w-64 bg-white rounded overflow-hidden shadow-xl m-4">
      <img className="w-full" src={item.image} alt="image" />
      <h6 className="text-xl sm:text-m font-semibold text-gray-800 px-4 py-2">{item.name}</h6>
      <h4 className="text-lg sm:text-m font-semibold text-gray-800 px-4 py-2">{item.price}</h4>
    </div>
    </>
  )
}

export default Card