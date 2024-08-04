import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

export default function Home() {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [productPost, setProductPost] = useState([])

  async function fetchProductData() {
    setLoading(true)
    try {
      let response = await fetch(API_URL);
      let productData = await response.json();

      setProductPost(productData)
    }
    catch (error) {
      alert("Error Data, Please try again")
      setProductPost([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <>
      <div>
        {
          loading ? <Spinner /> :
            productPost.length > 0 ?
              (<div className=' grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-5 gap-y-8 p-6 my-7  min-h-[80vh]'>
                {
                  productPost.map((item) => (
                    <Product key={item.id} item={item} />
                  ))
                }
              </div>) :
              (<div className=' w-screen h-screen flex justify-center items-center'>
                <p>No Data Found</p>
              </div>)
        }
      </div>
    </>
  )
}