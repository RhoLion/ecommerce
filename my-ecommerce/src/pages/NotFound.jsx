import { useRouteError } from 'react-router-dom';
import Layout from '../components/Layout';
import notFound from '../assets/notFound.png'

const NotFound = () => {
    const error = useRouteError;
    console.log('esto es un error', error)
   
        return (
            <div>
                   <Layout/>
                 <div className="flex flex-col justify-center  items-center mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-800">¡Esta página no exite!</h2>
                    <img
                    className="block item-center h-auto w-42 lg:hidden"
                    src={ notFound }
                    alt="logo"
                  />
                  <img
                    className="hidden item-center h-auto w-96 lg:block"
                    src={ notFound }
                    alt="logo"
                  />
                </div>
            </div>
        );
    
}

export default NotFound;