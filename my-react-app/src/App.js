import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import ColorSelector from './components/randomColor';
import StarRating from './components/starRating';
import ImageSlider from './components/imageSlider';
import LoadMoreObjects from './components/load-more-products';


function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian/>
      
      {/* Rand Color Generator */}
      <ColorSelector/>
      
      {/* Star Rating Component */}
      <StarRating/>

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"5"}/>

      {/* Load More Products from REST API */}
      <LoadMoreObjects/>
    </div>
  );
}

export default App;
