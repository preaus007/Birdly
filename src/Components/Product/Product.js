import React, { useState, useEffect } from "react";
import BirdsLoading from "../../Shared/Loaders/BIrdsLoading/BirdsLoading";



import { useNavigate } from "react-router-dom";
import useFamily from "../../Hooks/useFamily";
import Filter from "./Filter";

const Product = () => {
  const [data, setData] = useState([]);

  const [family , setFamily] = useFamily();
  const [sieve, setSieve] = useState(data);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch(`https://bird-shop-server-two.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSieve(data);
        setLoading(false);
      });
  }, []);

  
  console.log(family);


  const navigate = useNavigate();



  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x?.family === cat);
    setSieve(updateList);
  }


  let birdsFamily = family.map(family=> <Filter key={family._id} family={family.family} filterProduct = {filterProduct}></Filter>)

  if(data.length===0)
  {
    return <BirdsLoading></BirdsLoading>
  }

  const ShowProduct = () => {
    
    return (
        <div className="container ml-auto mr-auto p-16 mt-20 mb-16">
          <h1 className="text-4xl text-center mb-5">Latest Products</h1>

            <div className="flex justify-center mb-10" id="Product">
                <button className="btn btn-outline mx-0.5" onClick={() => setSieve(data)}>All</button>{/* 
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("Cockatoo")}>Cockatoo</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("Lovebird")}>Love Birds</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("Macaw")}>Macaws</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("Quail")}>Quail</button> */}

                {birdsFamily}
            </div>
            
      
            <div className="grid grid-cols-4 gap-12">
                {sieve.map((product) => {
                    return(
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="birds" className="rounded-xl h-48" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product?.name?.substring(0, 12)}...</h2>
                                <p> <b>Price :</b> ${product.price}</p>
                                <div className="card-actions">
                                <button className="btn btn-detailes">Detailes</button>
                                <button className="btn btn-buy">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
  };

  return (
    <div>
      <ShowProduct />
    </div>
  );
};

export default Product;
