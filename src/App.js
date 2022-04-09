import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import data from "./components/data.js"
import Basket from './components/Basket';
import {Routes, Route} from "react-router-dom"
function App() {
  const [cartItems, setCartItem] = useState([])
  const [add, setAdd] = useState(false)
  const [items, setItems] = useState(data)

  const filterProducts = (category) => {
   const updatedProducts =  data.filter(product => {
      return product.category === category
    })
    console.log(updatedProducts)
    setItems(updatedProducts)

  } 
 
  const onAdd = (product) => {
   
   
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItem(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty + 1} : x))
    }else {
      setCartItem([...cartItems, {...product, qty:1}])
   }
   setAdd(prev => !prev)

  }

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist.qty === 1) {
      setCartItem(cartItems.filter(x => x.id !== product.id))

    } else{
      setCartItem(cartItems.map(x => x.id === product.id ? {...exist, qty:exist.qty -1} : x))
    }
  }

 


  return ( 
    <>
     <Navbar cartItems={cartItems} items={items} filterProducts={filterProducts} setItems={setItems} data={data} />
    <Routes>
     
      <Route path="/" element={<Products add={add} onAdd={onAdd} data={items} /> } />
      <Route path='/cart' element={<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
    
     
    
    </Routes>
    </>
  );
}

export default App;
