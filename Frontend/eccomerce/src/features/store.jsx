import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import { productsApi } from './productApi'
import cartReducer from './cartSlice'
 const store = configureStore({
  reducer: {
    cart:cartReducer,
    products:productReducer,                        //create  a store
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
return getDefaultMiddleware().concat(productsApi.middleware)
  }
})

export default store