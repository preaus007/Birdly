import React, { useState, useEffect } from "react";
import BirdsLoading from "../../Shared/Loaders/BIrdsLoading/BirdsLoading";



import { Link, useNavigate } from "react-router-dom";
import useFamily from "../../Hooks/useFamily";
import Filter from "./Filter";

const Product = () => {
  const [data, setData] = useState([]);

  const [family, setFamily] = useFamily();
  const [sieve, setSieve] = useState(data);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [size, setSize] = useState(6)



  useEffect(() => {
    setLoading(true);
    fetch(`https://bird-shop-server-two.vercel.app/products?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSieve(data);
        setLoading(false);
      });
  }, [page, size]);


  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_DOMAIN;
    fetch(`https://bird-shop-server-two.vercel.app/itemsCount`)
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 5);

        setPageCount(pages);
      })
  }, [])

  console.log(family);


  const navigate = useNavigate();



  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x?.family === cat);
    setSieve(updateList);
  }


  let birdsFamily = family.map(family => <Filter key={family._id} family={family.family} filterProduct={filterProduct}></Filter>)

  if (data.length === 0) {
    return <BirdsLoading></BirdsLoading>
  }


  const addToCart = () => {

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


        <div className="grid grid-cols-3 gap-16">
          {sieve.map((product) => {
            return (
              <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={product.image} alt="birds" className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product?.name?.substring(0, 12)}...</h2>
                  <p> <b>Price :</b> ${product.price}</p>
                  <div className="card-actions">
                    <Link to='/detailes' className="btn btn-detailes shadow-md">Detailes</Link>
                    <button className="btn btn-buy shadow-lg">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}


        </div>

        <article className="pageination text-center mt-20 mb-10">
          <div className="btn-group shadow-lg">

            {
              [...Array(pageCount).keys()].map(number => <button className={page === number ? "btn btn-active" : "btn"} onClick={() => setPage(number)}>{number + 1}</button>)
            }
  
          </div>

        </article>
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
