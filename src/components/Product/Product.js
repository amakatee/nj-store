import React from 'react'
import './Product.css'
import formatCurrency from '../utils/FormatCurrency'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/cartSlice'

export default function Product(props) {
   const {product, name, price, id, imageURL} = props
 
   const dispatch = useDispatch()

   const addToCart = () => {
       dispatch(cartAction.addToCart({name, id, price, imageURL}))


  }


  return (
    <div>
     
        <div className='cart'>
            <div className='img-container'>
                <a href='#'><img src={imageURL}></img></a>
                
                <button onClick={addToCart} className='add-to-cart'>Add to Cart</button>
            </div>
            <div>
                <div className='carts-description flex'>
                 
                     <h4 className='cart-name'>{name}</h4>
                     <h4 className='cart-price'>{formatCurrency(price, 'RUB')}</h4>
                    
                </div>
                {/* <button onClick={() => onAdd(product)} className='add-to-cart'>Add to Cart</button> */}
            </div>
        </div>
    </div>
  )
}
