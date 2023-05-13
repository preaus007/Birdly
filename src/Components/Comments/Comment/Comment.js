import React from 'react';

const Comment = (props) => 
{
    const { reviewData } = props;


    const {name , review , rating} = reviewData

    return (
        <div className="card max-w-screen max-h-screen shadow-xl">
            <div className="card-body items-center text-center">

            <div className="rating">
                <p>Ratings: {rating} /5</p>
            </div>
                
                <h2 className="text-xl font-semibold"> Customer's Name : {name} </h2>
                <p>{review}</p>
                
            </div>
        </div>
    );
};

export default Comment;