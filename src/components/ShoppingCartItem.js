import React from 'react'
import formatCurrency from './utils/FormatCurrency'

export default function shoppingCartItemprops(props){
    const {key, id, name, total, imageURL} = props
  return (   <div className='shopping-cart-item flex'>
                     <div className='shopping-cart-img'>
                         <img width="3rem" src={imageURL}></img>
                     </div>
                     <div className='shopping-cart-desc flex '>
                         <h1 className='total-h1'><span className='desc-span'>name :</span>{name}</h1>
                         <h1 className='total-h1'><span className='desc-span'>price: </span> {formatCurrency(total, 'RUB')}</h1> 
                         <h1 className='total-h1'><span className='desc-span'>quantit: </span> 1</h1>
                         <div className='flex'>
                         <button className='nav-remove-add'>+</button>
                         <button className='nav-remove-add'>-</button>
                         </div>
                        
                     </div>
                 </div>
     
  )
}
