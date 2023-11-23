import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const CardSection = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setIsLoading(false)
            setProducts([...data])
            
        } catch (error) {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <>
            {
                isLoading ? <h1 className='text-center mt-4'>Loading ...</h1> : (
                    <div className='container mt-5'>
                        <div className="row">
                            {
                                products.map((product, index) => (
                                    <div className="col-3 mb-2">
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                )
            }
        </>
    )
}

export default CardSection