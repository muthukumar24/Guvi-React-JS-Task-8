# Guvi-React-JS-Task-8
This Repository is created for submitting the allocated task from React JS session day - 12.

The given task is to create a cart page with per-item price, per-item quantity, Total quantity and Total amount using **React Redux Toolkit**.

Application Workflow:

Home Page(Products Page)

- Upon landing All available products are displayed to the user with details such as title, description, price, and available stock.

- When the user clicks the "Buy Now" button on any product, the product is added to the cart and the user is redirected to the Checkout Cart Page

Checkout Cart Page

- The cart displays all products added by the user with their respective details including quantity, price, and total price.

- The user can increase or decrease the quantity of each product using the "+" and "-" buttons

- As the quantity of a product is increased or decreased, the total quantity and total amount of the cart are recalculated and updated accordingly.

- The user can select a payment method from a dropdown menu (e.g., Cash On Delivery, Card, UPI Transaction).

- The user can remove a product from the cart by clicking the "Remove" button, which will update the total quantity and total amount accordingly.

- If the user clicks the "Buy Now" button after selecting the payment method, an alert message is displayed notifying that the order has been placed.

- If the user clicks the "Remove" button, the selected product will be removed from the cart.

- If the user clicks the "Back" button, they are redirected back to the Products Page

Technologies:
- The project utilizes React.js for building the user interface, Redux for state management, and Bootstrap for styling and responsive design.


Attached screenshots under "Screenshots" folder for your reference. 

The project uses downloaded images stored under "public" folder, as per the mentor's instructions. since the images and thumbnails from the provided JSON data are not working.

Kindly refer the following files for source code.

- /src/App.jsx
- /src/components/ProductList.jsx
- /src/components/Cart.jsx
- /src/redux/store.js
- /src/redux/cartSlice.js
- /src/index.css

Thankyou and Awaiting Feedback.


