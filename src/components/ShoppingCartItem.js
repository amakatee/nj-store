import React from 'react'
import formatCurrency from './utils/FormatCurrency'

export default function shoppingCartItemprops(props){
    const {key, item, onAdd, onRemove} = props
  return (   <div className='shopping-cart-item flex'>
                     <div className='shopping-cart-img'>
                         <img width="3rem" src={item.imageURL}></img>
                     </div>
                     <div className='shopping-cart-desc flex '>
                         <h1 className='total-h1'><span className='desc-span'>name :</span>{item.name}</h1>
                         <h1 className='total-h1'><span className='desc-span'>price: </span> {formatCurrency(item.price, 'RUB')}</h1> 
                         <h1 className='total-h1'><span className='desc-span'>quantit: </span> {item.qty}</h1>
                         <div className='flex'>
                         <button onClick={() => {onAdd(item)}} className='nav-remove-add'>+</button>
                         <button onClick={() => {onRemove(item)}} className='nav-remove-add'>-</button>
                         </div>
                        
                     </div>
                 </div>
     
  )
}
