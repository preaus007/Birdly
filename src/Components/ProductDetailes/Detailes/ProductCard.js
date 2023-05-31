import React from 'react';
import './Detailes.css';

const ProductCard = () => {
    return (
        <div>
            <div className="card max-w-screen bg-base-100 shadow-xl">
                <figure><img src="https://cdn.pixabay.com/photo/2020/07/29/18/38/parrot-5448628_960_720.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='rating-container p-2 '>
                        <div className='text-center'>
                            <h2 className='mb-3 text-xl font-semibold'>Ratings</h2>
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>

                    </div>

                    <div className='react-container p-2 text-center'>
                        <article className='grid grid-cols-3 gap-6'>
                            <div>
                                <i class="far fa-thumbs-up fa-2x"></i>
                                <h3 className='text-xl font-semibold'>Like</h3>
                            </div>
                            <div>
                                <i class="far fa-thumbs-down fa-2x"></i>
                                
                                <h3 className='text-xl font-semibold'>Unlike</h3>
                            </div>
                            <div>

                                <i class="far fa-heart fa-2x"></i>
                                
                                <h3 className='text-xl font-semibold'>Fabourite</h3>
                            </div>
                        </article>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;