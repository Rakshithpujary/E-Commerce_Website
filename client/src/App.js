import React from "react";
import NavigationBar  from "./Components/NavigationBar";
import ImageComponent from "./Components/ImageComponent";
import ProductComponent from "./Components/ProductComponent";
import './CSS/Main.css';
import ReviewComponent from "./Components/ReviewComponent";


function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <ImageComponent/>
        <ProductComponent/> 
        <ReviewComponent/>
    </div>
  );
}

export default App;

