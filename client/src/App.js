
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import ImageComponent from './Components/ImageComponent';
import ProductComponent from './Components/ProductComponent';
import ReviewComponent from './Components/ReviewComponent';
import BuyPage from './Pages/BuyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar can be displayed on all pages */}
        <NavigationBar />

        {/* Define Routes for different pages */}
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <>
              <ImageComponent />
              <ProductComponent />
              <ReviewComponent />
            </>
          } />
          
          {/* Route for Buy Page */}
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

