import { Rating } from '@smastrom/react-rating';
import React from 'react';

const RatingComponent = (props) => 
{

    const {rating , setRatings} = props
    return (
        <div>
            <Rating value={rating} onChange={setRatings}></Rating>
        </div>
    );
};

export default RatingComponent;