# Gadget Heaven

Gadget Heaven is an e-commerce platform that uses JSON APIs to render data. It includes cart and wishlist features with support for adding and removing items. The platform manages state using Context API and local storage for data persistence and includes a chart feature to display product statistics.

[Live Website Link](https://gadget-heaven.surge.sh/)  
[Requirement Document Link](./design_docs/requirements.pdf)

---

## React Fundamental Concepts

This project demonstrates various fundamental React concepts:

1. **Components**: Modular, reusable components for each UI section.
2. **Props**: Passing data between parent and child components.
3. **State**: Managing dynamic data using `useState`.
4. **Hooks**: Using `useEffect` for side effects, `useContext` for global state management
5. **React Router**: Implementing page navigation and category-based views.

## Data Handling and Management

For managing data, this project uses:

- **Context API**: Used to manage global state for the cart and wishlist, allowing seamless data flow between components.
- **Local Storage**: Cart and wishlist data are saved in local storage to maintain user choices across sessions.

## Features

1. **Dynamic Product Categories**: Includes product categories for Laptops, Phones, Accessories, Smartwatches, MacBooks, and iPhones.
2. **Add to Cart & Wishlist**: Allows users to add items to a cart or wishlist, with immediate feedback and updates to the cart count in the navbar.
3. **Persisted State with Local Storage**: Cart and wishlist data are stored in local storage, ensuring items remain in place even after a page refresh.
4. **Responsive Design**: Optimized for different screen sizes for a seamless user experience on mobile, tablet, and desktop devices.
5. **Sort**: Allows user to sort through products in cart.

## npm packages
- react-toastify
- react-icons
- react-rating-stars-component
- recharts
