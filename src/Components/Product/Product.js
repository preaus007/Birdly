import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  const [sieve, setSieve] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSieve(data);
        setLoading(false);
      });
  }, []);

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setSieve(updateList);
  }

  const ShowProduct = () => {
    
    return (
        <div className="mx-2">
            <div className="flex justify-center" id="Product">
                <button className="btn btn-outline mx-0.5" onClick={() => setSieve(data)}>All</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("men's clothing")}>Pigeon</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("women's clothing")}>Parrots</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("jewelery")}>Cockatoo</button>
                <button className="btn btn-outline mx-0.5" onClick={() => filterProduct("electronics")}>Quail</button>
            </div>
            <div className="grid grid-cols-4">
                {sieve.map((product) => {
                    return(
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt="birds" className="rounded-xl h-48" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.title.substring(0, 12)}...</h2>
                                <p>${product.price}</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
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
      <h1 className="text-4xl text-center mb-5">Latest Products</h1>
      <ShowProduct />
    </div>
  );
};

export default Product;
