import React from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch to dispatch actions to the Redux store
import { addToCart } from '../redux/cartSlice'; // Importing the addToCart action from the cart slice
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

// Product data to be displayed  
const productData = {
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "image": "./iPhone9.jpg",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "image": "./iPhoneX.jpg",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "image": "./Samsung.jpg",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "image": "./oppoPhone.jpg",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "image": "./huwaiPhone.jpg",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const navigate = useNavigate(); // Hook for navigation

  const handleBuyNow = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product as payload
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <>
    {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand mx-4 mb-1" href="#" id='nav-brand'>JustShopIt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      {/* Home Page Header */}
      <header className="bg-dark py-4">
        <div className="container">
          <h1 className="text-center text-white mt-3">
            📱Shop in Style📱
          </h1>
          <p className="text-center text-white-50">
            Make Your Choice
          </p>
        </div>
      </header>

      {/* Products Section */}
    <div className='container mb-3'>
      <h1 className='text-center mt-3'>Products</h1>
      <div className="row">
        {productData.products.map((product) => (
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 py-3' key={product.id}>
                <div className='card h-100'>
                    <img className='card-img-top' src={product.image} alt={product.title} />
                    <div className='card-body'>
                        <h3>{product.title}</h3>
                        <p className='prod-details mt-1 mb-2'>{product.description}</p>
                        <p className='prod-details'>Ratings - {product.rating}⭐</p>
                        <p className='prod-details'>Price - ${product.price}</p>
                        <p className='prod-details'>Discount - {product.discountPercentage}%</p>
                        <p className='prod-details'>Available Stocks - {product.stock}</p>
                        <button className='btn btn-success' onClick={() => handleBuyNow(product)}>Buy Now</button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">© Copyright - All Rights Reserved</p>
        </div>
    </footer>
    </>
  );
};

export default ProductList;
