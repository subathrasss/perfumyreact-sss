import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
function Product() {
    return (
      <div class="products">
  
        <div class="box">
  
          <img src={one} alt="one"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
  
  
        <div class="box">
          <img src={three} alt="villain"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={two} alt="Designs Club"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
  
  
  
      </div>
    )
  }
  export default Product