import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../../store/cartSlice"
import formatCurrency from "../utils/FormatCurrency"
export default function CartItemNav(props) {
    const {name, quantity, id, total, imageURL, price} = props

    const dispatch = useDispatch()
    const incrementCart = () => {
        dispatch(cartAction.addToCart({id, name, price, total}))

    }

    const decrementCart = () => {
        dispatch(cartAction.removeFromCart(id))
    }
    return(
        <>
     
      
        <div className='shopping-cart-item flex'>
        <div className='shopping-cart-img'>
            <img width="3rem" src={imageURL}></img>
        </div>
        <div className='shopping-cart-desc flex '>
            <h1 className='total-h1'><span className='desc-span'>name :</span>{name}</h1>
            <h1 className='total-h1'><span className='desc-span'>price: </span> {formatCurrency(total, 'RUB')}</h1> 
            <h1 className='total-h1'><span className='desc-span'>quantit: </span> {quantity}</h1>
            <div className='flex'>
            <button onClick={incrementCart} className='nav-remove-add'>+</button>
            <button onClick={decrementCart} className='nav-remove-add'>-</button>
            </div>
           
        </div>
        </div> 
        
        </>

    )
}