import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './features/addToCart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: addToCartReducer,
  },
})

