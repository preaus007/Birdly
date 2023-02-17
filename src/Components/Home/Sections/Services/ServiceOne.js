import Lottie from 'lottie-react'
import React from 'react';
import Paracute from "../../../../Assets/123814-ecommerce-parcel-box-delivery-by-parachute.json"

const ServiceOne = () => {
    return (
        <div className='container ml-auto mr-auto p-40 '>
            <h1 className=' mb-10 text-2xl font-semibold text-center'>Fast delivery</h1>
            <article className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='max-w-screen'>

                    <Lottie className='' animationData={Paracute} loop={true} />
                </div>
                <div className=' my-auto'>
                    <h2 className='text-xl font-semibold'>We commit Fastest Delivery on Town</h2>
                </div>
            </article>
        </div>
    );
};

export default ServiceOne;