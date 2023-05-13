import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Cart = () => {
    /* 
        const [ user ] = useAuthState(auth);
    
        const userName = user.displayName */

    return (
        <section className='container p-16 ml-auto mr-auto'>
            <article className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <div className="card max-w-screen p-10 shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl font-semibold'>Cart -</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div></div>

            </article>
        </section>
    );
};

export default Cart;