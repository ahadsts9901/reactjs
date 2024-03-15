import React, { useState } from 'react'
import Img from "../../assets/images/img.jpg"

const ProductCard = (props) => {
    const [quantity,setQuantity] = useState(0)
    const {image, category, description, price} = props.product
    return (
        <>
            <div className="card" >
                <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{category}</h5>
                        <p className="card-text">{description}</p>
                        <p className='fw-bold'>Price: RS {price} </p>
                        <a href="#" className="btn btn-primary" >Add To Cart</a>
                    </div>
            </div>
        </>
    )
}

export default ProductCard