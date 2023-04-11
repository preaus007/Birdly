import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Cart = () => 
{

    const [ user ] = useAuthState(auth);

    const userName = user.displayName

    return (
        <div>
            <h2 className='text-center text-xl font-semibold'>{userName}'s Cart</h2>
        </div>
    );
};

export default Cart;