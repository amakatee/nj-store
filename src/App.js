import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import data from "./components/data.js"
import {Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"
function App() {
  const cartItems = useSelector(state => state.cart.itemsList)



  const [add, setAdd] = useState(false)
  const [items, setItems] = useState(data)

  const filterProducts = (category) => {
   const updatedProducts =  data.filter(product => {
      return product.category === category
    })
    console.log(updatedProducts)
    setItems(updatedProducts)

  } 
 

 


  return ( 
    <>
     <Navbar cartItems={cartItems} items={items} filterProducts={filterProducts} setItems={setItems} data={data} />
     
     
    <Routes>
      <Route path="/" element={<Products add={add}  data={items} /> } />
    </Routes>
    </>
  );
}

export default App;
