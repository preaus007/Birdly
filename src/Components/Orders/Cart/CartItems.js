import React from 'react';
import Cartitem from './Cartitem';

const CartItems = (props) => 
{

    const {cartItems} = props
    return (
        <article className='cartContainer'>
            <article className=''>
                {cartItems?.map(cartitem => <Cartitem key={cartitem?._id} cartitem={cartitem}></Cartitem>)}
            </article>
            <article></article>
        </article>
    );
};

export default CartItems;