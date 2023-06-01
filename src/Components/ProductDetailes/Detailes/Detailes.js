// import React from 'react';

// const Detailes = () => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     );
// };

// export default Detailes;
import React from 'react';
import { useParams } from 'react-router-dom';
//import UseProducts from '../../Hooks/UseProducts';
import Origin from './Origin';
import ProductCard from './ProductCard';

const Detailes = () => {

    const { id } = useParams();


    return (
        <div className='container ml-auto mr-auto mt-20 mb-10 p-20'>
            <h1 className='text-2xl font-bold mt-10 mb-10 text-center'>Birds Detailes</h1>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
                    <ProductCard></ProductCard>
                    <div className='my-auto'>
                        <h2 className='text-2xl font-bold text-center '>Name : Maccaw </h2>
                        <h3 className='text-xl font-semibold text-center'> Scientific Name : </h3>
                    </div>
                </article>


                <article className='mt-20 mb-10'>
                    <h2 className='mb-10 mt-10 text-center text-2xl font-bold'>Bird's Origin</h2>
                    <Origin></Origin>
                </article>
            
        </div>
    );
};

export default Detailes;