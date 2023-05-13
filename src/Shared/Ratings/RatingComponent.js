
import React from 'react';
import { Rating } from 'primereact/rating'


const RatingComponent = (props) => 
{

    const {rating , setRating} = props
    return (
        
        <Rating className='flex justify-center align-middle gap-2 text-warning' value={rating} onChange={(e)=> setRating(e.value)}></Rating>

    );
};

export default RatingComponent;