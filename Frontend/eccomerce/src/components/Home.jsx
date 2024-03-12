
import { useGetAllProductsQuery } from '../features/productApi'
import { addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'
import { useState } from 'react'
function Home() {
  const {data, error, isLoading}= useGetAllProductsQuery()
  const {isOpen, setOpen}= useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  function handleAddClick(item){
    dispatch(addToCart(item))
  navigate("/CartModal")
  setOpen(isOpen=>!isOpen)
  }
  return (
    <div>
      {isLoading?(<h2>Loading...</h2>):error?(<p>Error fetching data</p>):(
        <>
<h2>New Arrivals</h2>
<div className='grid grid-cols-3'>
  {data?.map(item=>{
    return(
      <div key={item.id} className='w-fit border-2 border-gray-500 p-4'>
      <Link to={`Details/${item.id}`} state={{item}}>view item</Link>
      <h3 className='text-2xl text-red-600 font-bold'>{item.name}</h3>
      <img src={item.image} alt={item.name} width="300px" height="300px"/>
      <span className='text-xl text-yellow-800 font-medium'>{item.desc}</span>
      <h4 className='text-greed-500 font-bold text-xl'>{item.price}</h4>
      <button onClick={()=>handleAddClick(item)} className='w-full bg-sky-500 align-middle justify-center py-3'>Add to Cart</button>
      </div>
    ) 
  })}
</div>
        </>
      )}
      {
        isOpen?"":
        <CartModal
         data={data}


      />
      }
     
    </div>
  )
}

export default Home
