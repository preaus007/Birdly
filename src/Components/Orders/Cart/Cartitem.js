import React from 'react';
import RatingComponent from '../../../Shared/Ratings/RatingComponent';

const Cartitem = (props) => 
{
    const { cartitem} = props
    const { image , name , family, price } = cartitem
    return (
        <div className='productsContainer '>
            <article>
                <img src={image}/>
            </article>
            <article>
                <h3>Name : {name}</h3>
                <h3>Family : {family}</h3>
                <h3>price : {price}</h3>
                <RatingComponent></RatingComponent>
            </article>
        </div>
    );
};

export default Cartitem;