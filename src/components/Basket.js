import React from 'react'
import "./Basket.css"
import ShoppingCartItem from "./ShoppingCartItem"
import { Link } from 'react-router-dom'
import formatCurrency from './utils/FormatCurrency'

export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props
  
  const itemsPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.qty

  },0)
  const taxPrice = itemsPrice * 0.13
  const shippingCost = itemsPrice > 1000 ? 200 : 0
  const totalPrice = itemsPrice + shippingCost
  return (
    <div>
        <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
    

          <div  className='nav-shopping-cart grid'>
  
              
              <div className='shopping-cart-slide grid'>
                  {cartItems.map(item => {
                      return <ShoppingCartItem key={item.id} item={item} onAdd={onAdd} onRemove={onRemove}/>
                  })}
                 
               </div>
             
              <div className='shopping-cart-total'>
                  
                  <h1 className='cart-total total-h1'><span className='desc-span'>Price: </span> {formatCurrency(itemsPrice, 'RUB')}</h1>
                  <h1 className='cart-total total-h1'><span className='desc-span'>Shipping: </span> {formatCurrency(shippingCost, 'RUB')}</h1>
                  <h1 className='total total-h1'><span className='desc-span'>Total: </span>{formatCurrency(totalPrice, 'RUB')}</h1>
                  <div className='flex checkout-btn-cont'>
                  <button className='checkout-btn' >Check out</button>
                  <button className='checkout-btn' ><Link to="/">Back To Store</Link> </button>
                  </div>
              </div>
          </div>

      
    </div>
  )
}
