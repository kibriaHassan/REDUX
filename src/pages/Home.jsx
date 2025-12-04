import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsCard from '../components/ProductsCard'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => setProducts(res.data.products))
            .catch(error => console.log(error.message))
            
    }, [])
    return (
        <>
        
            <div className="container">
                <h2 className='text-4xl font-bold text-center my-5'>Latest Products</h2>
                <div className="grid grid-cols-4 gap-6">
                    {products?.slice(8, 16).map(product => (
                        <ProductsCard
                            key={product.id}
                            product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home