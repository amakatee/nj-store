import React from 'react'
import 'boxicons'
import "./Navbar.css"
import { Link} from 'react-router-dom' 


export default function Navbar({cartItems, filterProducts ,items, setItems, data}) {
    const [visiblity, setvisiblity] = React.useState(false)
    

    const toggleMenu = () => {
        setvisiblity(prevVal => !prevVal)
    }

 
 
  return (
    <>
     <div className='top-navigation '>
     <ul className='left-menu flex'>
        
        <li className='nav-icon'>
             <Link to='/cart'><box-icon name='shopping-bag'></box-icon></Link>
             <span>({cartItems.length})</span>
        </li> 
    
      </ul>
         <h1 id='logo'><Link to='/'>nj</Link></h1>

         <div></div>
  
      
     
     </div>
 
      <header className='flex entire-navigation'>
      <div> 
          
        </div>

        <button onClick={toggleMenu} className='mobile-nav-toggle'
         aria-controls='primary-navigation'
         aria-expanded={visiblity}>
            <span className='sr-only'>Menu</span>
        </button>
      <nav className='nav'>
          <ul data-visible={visiblity} id="primary-navigation" className='primary-navigation flex'>
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
