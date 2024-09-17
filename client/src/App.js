
import NavigationBar from './Components/NavigationBar';
import ImageComponent from './Components/ImageComponent';
import ProductComponent from './Components/ProductComponent';
import ReviewComponent from './Components/ReviewComponent';
import './App.css';

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
