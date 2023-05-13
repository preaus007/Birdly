import React from 'react';
import { useQuery } from 'react-query';
import Comment from '../Comment/Comment';


const UsersComments = () => {



    const { data : reviews = [] } = useQuery({
        queryKey : ['reviews'],
        queryFn : ()=> fetch('https://bird-shop-server-two.vercel.app/reviews').then(res=>res.json())
    })
    return (
        <div className='container p-20 ml-auto mr-auto mt-10 mb-10'>
            <article className='grid grid-cols-1 lg:grid-cols-3 gap-16'>

                {reviews.map(review =><Comment key={review._id} reviewData={review}></Comment>)}
            </article> 
        </div>
    );
};

export default UsersComments;