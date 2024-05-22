import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from React-Redux
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice'; // Importing actions from cartSlice
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Cart = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const cart = useSelector((state) => state.cart); // Hook to access the Redux state

  return (
    <div className='container'>
      {/* Page header */}
      <h1 className='text-center mt-2 mb-4'>Checkout - Cart</h1>
      <div className="row">
        {cart.items.map((item) => (
          <React.Fragment key={item.id}>
            {/* Product image and details */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-3">
              <img src={item.image} alt={item.title} />
              <div>
                <h2 className='mt-2'>{item.title}</h2>
                <p className='prod-details'>{item.description}</p>
              </div>
            </div>
            {/* Quantity controls and pricing */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className='d-flex gap-2'>
                <span className='prod-details'>Quantity -</span>
                <button className='btn btn-primary py-0' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button className='btn btn-primary py-0' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <p className='mt-3 prod-details'>Price - ${item.price.toFixed(2)}</p>
              <p className='prod-details'>Shipping - Free</p>
              <p className='prod-details mt-3'>Total - ${item.totalPrice.toFixed(2)}</p>
              <div className='d-flex'>
                {/* Remove item button */}
                <button className='btn btn-danger mt-2' onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* Displaying total quantity and amount */}
      <h5 className='my-3'>Total Quantity: {cart.totalQuantity}</h5>
      <h5>Total Amount: ${cart.totalAmount.toFixed(2)}</h5>
      {/* Payment method selection */}
      <select className="form-select my-3" aria-label="Default select example">
        <option defaultValue={'Select Payment Method'}>Select Payment Method</option>
        <option value="Cash On Delivery">Cash On Delivery</option>
        <option value="Card">Card</option>
        <option value="UPI Transaction">UPI Transaction</option>
      </select>
      <div className='d-flex gap-3'>
        {/* Buy Now button with alert */}
        <button className='btn btn-success my-3' onClick={() => alert("Your Order has been Placed Thank you!!")}>Buy Now</button>
        {/* Back button */}
        <Link to={'/'}>
          <button className='btn btn-dark my-3'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
