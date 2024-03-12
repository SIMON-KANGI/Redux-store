import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  cartItems: storedCartItems,
  cartTotalQuantity: storedCartItems.reduce((total, item) => total + item.cartQuantity, 0),
  cartTotalAmount: storedCartItems.reduce((total, item) => total + item.cartQuantity * item.price, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
        toast.info(`Increased the quantity of ${name} in cart`, { position: "top-center" });
      } else {
        state.cartItems.push({ id, name, price, cartQuantity: 1 });
        toast.success(`Added ${name} in cart`, { position: "top-center" });
      }
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const { id, name, cartQuantity, price } = state.cartItems.find(item => item.id === action.payload);
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.cartTotalQuantity -= cartQuantity;
      state.cartTotalAmount -= cartQuantity * price;
      toast.error(`Successfully removed ${name} from cart`, { position: "bottom-left" });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      localStorage.removeItem("cartItems");
      toast.error("Cart is Empty", { position: "bottom-left" });
    },
    decrementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1;
          toast.info(`Decreased the quantity of ${item.name} in cart`, { position: "top-center" });
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          toast.error("Product removed from cart", { position: "bottom-left" });
        }
        state.cartTotalQuantity -= 1;
        state.cartTotalAmount -= item.price;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    incerementQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.cartQuantity+=1
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += item.price;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  }
}
});

export const { addToCart, removeFromCart, clearCart, decrementQuantity,incerementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
