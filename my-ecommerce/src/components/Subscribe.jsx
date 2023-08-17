import React from "react";

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-amber-50 py-16 sm:py-24 lg:py-32">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl text-center">
              Suscríbete a nuestras noticias
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-800 text-center">
              ¡No te pierdas todas las noticias que tenemos para ti!
            </p>
            <div className="mt-6 flex justify-center">
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-lg mr-4 border-2 border-black  bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu correo electrónico"
              />
              <button
                type="submit"
                className="flex-none rounded-full bg-none border-2 border-black px-3.5 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
