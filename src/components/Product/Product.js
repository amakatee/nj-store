import React from 'react'
import './Product.css'
import formatCurrency from '../utils/FormatCurrency'

export default function Product(props) {
   const {name, price, onAdd ,product, add } = props

 


  return (
    <div>
        <div className='cart'>
            <div className='img-container'>
                <a href='#'><img src={product.imageURL}></img></a>
                
                <button  onClick={() => onAdd(product)} className='add-to-cart'>Add to Cart</button>
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
