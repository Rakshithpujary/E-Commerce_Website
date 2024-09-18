// ReviewComponent.jsx
import React, { useState } from 'react';
import { FcBusinesswoman } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import '../CSS/ReviewComponent.css';

const reviews = [
  {
    name: "Jane Doe",
    review: "Great product, highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Smith",
    review: "Excellent service and fast delivery!",
    rating: 5,
  },
  {
    name: "Olivia Johnson",
    review: "The quality exceeded my expectations!",
    rating: 5,
  },
  // Add more reviews as needed
];

const ReviewComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < reviews.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div id='Review-section' className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-avatar">
              <FcBusinesswoman className="avatar" />
            </div>
            <div className="review-content">
              <h3 className="person-name">{review.name}</h3>
              <div className="stars">
                {Array(review.rating).fill().map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button left-btn" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="carousel-button right-btn" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default ReviewComponent;
