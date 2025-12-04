import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/addToCart/cartSlice'

const ProductsCard = ({ product }) => {
    const { thumbnail, price, title, id } = product || {}
    const dispatch = useDispatch()
    const handleCart = () => {
        const currentproduct = { thumbnail, price, title, id }
        // console.log(currentproduct)
        dispatch(addToCart(currentproduct))
    }
    return (
        <div className='bg-slate-200 space-y-2 text-center'>
            <img src={thumbnail} alt={title} />
            <h4 className='text-xl font-bold line-clamp-1'>{title}</h4>
            <p>${price}</p>
            <button onClick={handleCart} className='text-slate-100 bg-slate-900 py-2.5 w-full cursor-pointer duration-300 hover:bg-slate-800'>Add to cart</button>
        </div>
    )
}

export default ProductsCard