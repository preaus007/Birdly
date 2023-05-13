import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';



const Users = () => {
   const [reviewData , setReviewData] = useState({
    reviewData : '',
    rating : 3
   });
   


   const handleChange = (selectedValue) =>
   {
        setReviewData((prevReview) => ({
            ...prevReview,
            rating : selectedValue
        }))
   }

    return (

        <div className='container ml-auto mr-auto p-20 mt-20'>
            <article className='text-center'>
                <div className="card p-8 w-full max-w-sm shadow-2xl bg-base-100">

                    <h2 className='text-2xl font-bold text-center mt-10 mb-5'>You can give your review here</h2>


                    <Rating rating = {reviewData.rating} onChange={handleChange}></Rating>
                    
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your Review of our site"></textarea>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    );
};

export default Users;