import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import CartItems from './CartItems';


import "./Cart.scss"

const Cart = () => {

    const [user] = useAuthState(auth);

    const userName = user?.displayName

    const url = `https://bird-shop-server-two.vercel.app/cart/${user?.email}`

    const { data: cartData = [] } = useQuery({
        queryKey: ['cartData'],
        queryFn: () => fetch(url).then(res => res.json())


    })


    console.log(cartData);

    return (
        <section className='container'>
            <article className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <div className="card max-w-screen p-10 shadow-xl">
                        <div className="card-body">
                            <h2 className='text-2xl font-semibold'>Cart -</h2>
                           
                           <article className=''>
                                <div>
                                    {cartData.map(cartData => <CartItems key = {cartData?._id} cartItems = {cartData?.cart}></CartItems>)}
                                </div>
                                <div></div>
                           </article>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card max-w-screen bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

        </section>
    );
};

export default Cart;