import React from 'react';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Details() {
  const currentItem = useLocation();
  const item = currentItem.state.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddClick(item) {
    dispatch(addToCart(item));
    navigate("/Cart");
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
        <img src={item.image} alt={item.name} className="w-full" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-700 text-base mb-2">{item.desc}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${item.price}</span>
            <button
              onClick={() => handleAddClick(item)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
