import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detailes = () => 
{

    const {id} = useParams(); 
    
    const [product , setProduct] = useState({})


    useEffect(()=>
    {
        fetch('https://bird-shop-server-two.vercel.app/graphql' , 
        {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                query : `{
                    data {
                        _id
                        name 
                        family
                        scientificName
                    }

                }`
            })
        }).then(res => res.json()).then(data => setProduct(data))
    } , [])


    console.log(product?.data?.data);
    
    const productData = product?.data?.data.find(data => data._id === id)

    console.log(productData);




    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default Detailes;