
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addToCart, clearCart, decrementQuantity, incerementQuantity } from '../features/cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleIncrement(itemId){
    dispatch(incerementQuantity(itemId)); //)
    console.log("item incremented")
  }
  function handleDecrement(itemId){
      dispatch(decrementQuantity(itemId))
      console.log("item decremented")
    }

  function handleRemove(itemId){
    dispatch(removeFromCart(itemId))
    console.log("item removed")
  }
function ClearCart(){
  dispatch(clearCart())
}
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-3xl font-bold text-red-700 mb-4">Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
          <Link to="/" className="text-blue-500 hover:underline">Start Shopping</Link>
        </div>
      ) : (
        <div className="cart-products">
          <div className="flex justify-between font-bold mb-2">
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total</div>
          </div>
          {cart.cartItems.map(item => (
            <div className="flex items-center justify-between border-b py-2" key={item.id}>
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                <div className='block'>
                <h1>{item.name}</h1>
                <button onClick={() => handleRemove(item.id)} className='text-red-500'>Remove</button>
                </div>
                
              </div>
              <div className='flex'>
                <button onClick={() => handleDecrement(item.id)} className='border-2 border-gray-300 px-3 py-3 text-2xl'>-</button>
                <div className='border-2 border-gray-300 px-3 py-3 text-2xl'>{item.cartQuantity}</div>
                <button onClick={() => handleIncrement(item.id)} className='border-2 border-gray-300 px-3 py-3 text-2xl'>+</button>
              </div>
              <div>${item.price?item.price.toFixed(2):"no price"}</div>
              <div>${(item.price * item.cartQuantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="font-bold mt-4">
            Total: ${cart.cartTotalAmount.toFixed(2)}
          </div>
          <button onClick={ClearCart} className='border-2 border-zinc-400 px-6 py-3 rounded-md hover:bg-red-600 
          hover:text-white'>Clear Cart</button>
        <div>
          <button className='bg-blue-500 text-slate-200 px-6 py-3 float-right'>Check Out</button>
        </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
