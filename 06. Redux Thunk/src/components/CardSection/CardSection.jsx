import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/Actions/product';

const CardSection = () => {
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector(state => state.GetProductsReducer)
    // console.log('selector', selector)

    useEffect(() => {
        dispatch(getProducts())
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