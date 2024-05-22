import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit
import cartReducer from '../redux/cartSlice'; // Importing the cartReducer from cartSlice

// Configuring the Redux store
export const store = configureStore({
  // Combining reducers - currently only cartReducer is being used
  reducer: {
    cart: cartReducer, // Assigning the cartReducer to handle the cart slice of the state
  },
});
