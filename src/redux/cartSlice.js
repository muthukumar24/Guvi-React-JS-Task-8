import { createSlice } from '@reduxjs/toolkit'; // Importing createSlice from Redux Toolkit

// Creating the cart slice
const cartSlice = createSlice({
  name: 'cart', // Naming the slice 'cart'
  initialState: {
    items: [], // Initial state for items in the cart
    totalQuantity: 0, // Initial state for total quantity of items in the cart
    totalAmount: 0, // Initial state for total amount of items in the cart
  },
  reducers: {
    // Reducer to handle adding items to the cart
    addToCart: (state, action) => {
      const product = action.payload; // The product to add, from the action payload
      const existingItem = state.items.find(item => item.id === product.id); // Check if the product already exists in the cart

      if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity of the existing item
        existingItem.totalPrice += product.price; // Update the total price of the existing item
      } else {
        state.items.push({ ...product, quantity: 1, totalPrice: product.price }); // Add the new product to the cart
      }
      state.totalQuantity += 1; // Increase the total quantity of items in the cart
      state.totalAmount += product.price; // Increase the total amount of the cart
    },
    // Reducer to handle increasing the quantity of a cart item
    increaseQuantity: (state, action) => {
      const id = action.payload; // The id of the item to increase the quantity of
      const item = state.items.find(item => item.id === id); // Find the item in the cart

      if (item) {
        item.quantity += 1; // Increase the quantity of the item
        item.totalPrice += item.price; // Update the total price of the item
        state.totalQuantity += 1; // Increase the total quantity of items in the cart
        state.totalAmount += item.price; // Increase the total amount of the cart
      }
    },
    // Reducer to handle decreasing the quantity of a cart item
    decreaseQuantity: (state, action) => {
      const id = action.payload; // The id of the item to decrease the quantity of
      const item = state.items.find(item => item.id === id); // Find the item in the cart

      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity of the item
        item.totalPrice -= item.price; // Update the total price of the item
        state.totalQuantity -= 1; // Decrease the total quantity of items in the cart
        state.totalAmount -= item.price; // Decrease the total amount of the cart
      }
    },
    // Reducer to handle removing an item from the cart
    removeFromCart: (state, action) => {
      const itemId = action.payload; // The id of the item to remove
      const itemIndex = state.items.findIndex(item => item.id === itemId); // Find the index of the item in the cart
      if (itemIndex >= 0) {
        const item = state.items[itemIndex]; // Get the item
        state.totalQuantity -= item.quantity; // Decrease the total quantity by the item's quantity
        state.totalAmount -= item.price * item.quantity; // Decrease the total amount by the item's total price
        state.items.splice(itemIndex, 1); // Remove the item from the cart
      }
    },
  },
});

// Exporting the actions created by createSlice
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

// Exporting the reducer to be used in the store configuration
export default cartSlice.reducer;
