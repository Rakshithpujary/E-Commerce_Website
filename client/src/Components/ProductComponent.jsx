import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import '../CSS/ProductComponent.css';
import { FaStar } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

const ProductComponent = () => {
    const navigate = useNavigate();  // Initialize the navigate function
    
    // Function to handle click and navigate to the Buy page with the product data
    const handleProductClick = (product) => {
        navigate('/buy', { state: { product } }); // Navigate to the Buy page with product data
    };

    const products = [
        {
            id: 1,
            name: "Crab",
            price: "Rs. 200/KG",
            image: "Assets/pic.jpg",
            reviews: 10,
            stars: 5
        },
        {
            id: 2,
            name: "Prawn",
            price: "Rs. 300/KG",
            image: "Assets/pic2.jpg",
            reviews: 8,
            stars: 4
        },
        {
            id: 3,
            name: "Lobster",
            price: "Rs. 500/KG",
            image: "Assets/pic4.jpg",
            reviews: 15,
            stars: 5
        },
        {
            id: 4,
            name: "Fish",
            price: "Rs. 150/KG",
            image: "Assets/pic5.jpg",
            reviews: 20,
            stars: 4
        }
    ];

    return (
        <div id="products-section" className="ProductPage-main-div">
            <div className="ProductPage-Search-div">
                <div>
                    <FcSearch className="product-search-icon" /> 
                    <input type="search" className="product-search" placeholder="crab, prawns etc....." />
                </div>
            </div>

            <div className="ProductPage-content-text-div">Our Top Products.</div>

            <div className="ProductPage-content-item-div">
                {products.map(product => (
                    <div key={product.id} className="item" onClick={() => handleProductClick(product)}>  {/* Add onClick */}
                        <div className="ProductPage-item-image-div">
                            <img src={product.image} alt={product.name} className="ProductPage-item-image" />
                        </div>
                        <div className="ProductPage-item-details-div">
                            <div className="ProductPage-item-details-itemName-div">
                                <h3>{product.name}</h3> <h5>{product.price}</h5>
                            </div>
                            <div className="ProductPage-item-details-StarReview-div">
                                <div className="ProductPage-item-details-star-div">
                                    {[...Array(product.stars)].map((star, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <p>({product.reviews} Reviews)</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ProductPage-content-button-div">
                <button className="ProductPage-button">Load..</button>
            </div>
        </div>
    );
}

export default ProductComponent;
