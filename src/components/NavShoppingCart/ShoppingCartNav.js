import formatCurrency from "../utils/FormatCurrency"
import { useDispatch, useSelector } from "react-redux"
import CartItemNav from "./CartItemNav"
import { cartAction } from "../../store/cartSlice"
import "./Basket.css"

export default function ShoppingCartNav() {
    let priceTotal = 0
    const cartItems = useSelector(state => state.cart.itemsList)
    const totalQuant = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()

    cartItems.forEach(item => {
       priceTotal += item.price*item.quantity
    })
    const shipping = priceTotal > 10000 ? 200 : 0

    const total = priceTotal + shipping
    const closeCart = () => {
        dispatch(cartAction.setShowCart(false))
    }
   
   
    return (
        <div>
        <div onClick={closeCart} className="overlay"></div>
        <div className="nav__shopping-cart">
              <div  className='nav-shopping-cart grid'>
  
              {totalQuant === 0 ? <div className="empty-cart-div">Cart is Empty!</div>  :   
  <div className='shopping-cart-slide grid'>
      
       {cartItems.map(item => {
          return <CartItemNav key={item.id} id={item.id} name={item.name} quantity={item.quantity} imageURL={item.imageURL} price={item.price} total={item.totalPrice} />
      })} 
     
   </div> }
 
  <div className='shopping-cart-total'>
      
      <h1 className='cart-total total-h1'><span className='desc-span'>Price: </span> {formatCurrency(priceTotal, 'RUB')}</h1>
      <h1 className='cart-total total-h1'><span className='desc-span'>Shipping: </span> {formatCurrency(shipping, 'RUB')}</h1>
      <h1 className='total total-h1'><span className='desc-span'>Total: </span>{formatCurrency(total, 'RUB')}</h1>
      <div className='flex checkout-btn-cont'>
      {/* <button className='checkout-btn' >Check out</button> */}
      </div>
  </div>
</div>


        </div>
        </div>
    )
}