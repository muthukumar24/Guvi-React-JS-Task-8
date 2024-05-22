import React from 'react';
import { Provider } from 'react-redux'; // Provides the Redux store to the application
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components for routing
import { store } from './redux/store'; // Importing the Redux store
import ProductList from './components/ProductList'; // Importing the ProductList component
import Cart from './components/Cart'; // Importing the Cart component
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS for styling

const App = () => {
  return (
    // Wrapping the entire application with the Redux Provider to give access to the store
    <Provider store={store}>
      {/* Setting up the Router to handle client-side routing */}
      <Router>
        {/* Defining the routes within the Router */}
        <Routes>
          {/* Route for the home page, rendering the ProductList component */}
          <Route exact path="/" element={<ProductList />} />
          {/* Route for the cart page, rendering the Cart component */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
