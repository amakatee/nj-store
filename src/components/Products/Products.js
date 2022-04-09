
import Product from '../Product/Product'
import './Products.css'



export default function Products(props) {
  const {data, onAdd, add} = props
 
 
  return (
    <div>
      <div className='carts'>
        { data.map(product => {
         return <Product add={add} key={product.id}  product={product} onAdd={onAdd} name={product.name} price={product.price} />
        })}
       
      </div>

      
       
    </div>
  )
}
