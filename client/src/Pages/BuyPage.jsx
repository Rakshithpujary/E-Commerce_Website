import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../CSS/BuyPage.css'; // Ensure the CSS file is imported
import { FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const BuyPage = () => {
    const location = useLocation(); // Retrieve the state passed from the ProductComponent
    const { product } = location.state || {}; // Destructure the product from location.state
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    // Handler for quantity change
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    // Handlers for button actions (implement as needed)
    const handleAddToCart = () => {
        console.log(`Added ${quantity}kg of ${product.name} to cart`);
        // Implement add to cart functionality
    };

    const handleBuyNow = () => {
        console.log(`Bought ${quantity}kg of ${product.name}`);
        // Implement buy now functionality
    };

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const totalStars = 5;
        let stars = [];

        for (let i = 1; i <= totalStars; i++) {
            stars.push(
                <FaStar
                    key={i}
                    className={i <= rating ? "star-filled" : "star-empty"}
                />
            );
        }

        return stars;
    };

    return (
        <div className="BuyPage-container">
            {product ? (
                <div className="BuyPage-content">
                    <div className="BuyPage-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="BuyPage-details">
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}</p>
                        <p>Reviews: {product.reviews}</p>
                        <div className="BuyPage-stars">
                            {renderStars(product.stars)}
                            <p>{product.stars} / 5 Stars</p>
                        </div>
                        <div className="BuyPage-quantity">
                            <label htmlFor="quantity">Quantity (kg): </label>
                            <input 
                                type="number" 
                                id="quantity" 
                                name="quantity" 
                                min="1" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                step="1" 
                                aria-label="Quantity in kg"
                            />
                        </div>
                        <div className="BuyPage-buttons">
                            <button onClick={handleAddToCart}><TiShoppingCart />Add to Cart</button>
                            <button onClick={handleBuyNow}><HiOutlineCurrencyDollar />Buy Now</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No product data found!</p>
            )}
        </div>
    );
};

export default BuyPage;
