import React from 'react'
import 'boxicons'
import "./Navbar.css"
import { Link} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/cartSlice'
import ShoppingCartNav from './NavShoppingCart/ShoppingCartNav'


export default function Navbar({cartItems, filterProducts ,items, setItems, data}) {
    const quantity = useSelector(state => state.cart.totalQuantity)
    const showNavCart = useSelector(state => state.cart.showCart)
    const showMenu = useSelector(state => state.cart.showMenu)
    const dispatch = useDispatch()

    const toggleMenu = () => {
        dispatch(cartAction.toggleMenu())
    }
    const showCart = () => {
        dispatch(cartAction.setShowCart())
    }

 
 
  return (
    <>
    {showNavCart &&  <ShoppingCartNav />}
    <div className='top-navigation '>
    <ul className='left-menu flex'>
        <li onClick={showCart} className='nav-icon'>
             <Link  to='#'><box-icon name='shopping-bag'></box-icon></Link>
             <span>({quantity})</span>
        </li> 
    
    </ul>
         <h1 id='logo'><Link to='/'>nj</Link></h1>
        <div></div>
     </div>
    <header className='flex entire-navigation'>
      <div></div>
      <button onClick={toggleMenu} className='mobile-nav-toggle'
         aria-controls='primary-navigation'
         aria-expanded={showMenu}>
            <span className='sr-only'>Menu</span>
        </button>
      <nav className='nav'>
          <ul data-visible={showMenu} id="primary-navigation" className='primary-navigation flex'>
              <li className='active'>
                  <a onClick={() => setItems(data)}  >Shop All</a>
              </li>
              <li  className='active'>
                  <a onClick={() =>filterProducts('jewels')} >Jewels</a>
              </li>
              <li className='active'>
                  <a onClick={() => {filterProducts('shoes')}}>Shoes</a>
              </li>
              <li  className='active'>
                  <a onClick={() => filterProducts('dress')}>Dresses</a>
              </li>
          </ul>
      </nav>
      </header>
     
      

    </>
  )
}
