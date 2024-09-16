import React from "react";
import '../CSS/ProductPage.css'
import { FaStar } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

const ProductComponent = () =>{
   return(
       <div className="ProductPage-main-div">


            <div className="ProductPage-Search-div"> 
                <div>
                    <FcSearch className="product-search-icon" /> <input type="search" className="product-search" placeholder="crab,prawns etc....."/> 
                </div>
            </div>


            <div className="ProductPage-content-text-div">Our Top Products.</div>


            <div className="ProductPage-content-item-div">

               <div className="item ProductPage-item1-div">
                   <div className="ProductPage-item-image-div">
                       <img src="Assets/pic.jpg" alt="Fishing scenery" className="ProductPage-item-image" />
                   </div>
                   <div className="ProductPage-item-details-div">
                       <div className="ProductPage-item-details-StarReview-div">
                           <div className="ProductPage-item-details-star-div">
                               <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                           </div> 
                           <p>  (10 Reviews)</p>
                       </div>
                       <div className="ProductPage-item-details-itemName-div">
                           <h3>Crab</h3> <h5>Rs. 200/KG</h5>
                       </div>
                       <div className="ProductPage-item-details-Quantity-div">
                           <h4>KG : </h4><input type="number" id="quantity" name="quantity" min="1" max="10" value="1" step="2"/>
                       </div>
                       <div className="ProductPage-item-details-button-div">
                           <button>Add</button><button>Buy</button>
                       </div>
                    </div>
                </div>

                <div className="item ProductPage-item2-div">
                    <div className="ProductPage-item-image-div">
                       <img src="Assets/pic.jpg" alt="Fishing scenery" className="ProductPage-item-image" />
                   </div>
                   <div className="ProductPage-item-details-div">
                       <div className="ProductPage-item-details-StarReview-div">
                           <div className="ProductPage-item-details-star-div">
                               <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                           </div> 
                           <p>  (10 Reviews)</p>
                       </div>
                       <div className="ProductPage-item-details-itemName-div">
                           <h3>Crab</h3> <h5>Rs. 200/KG</h5>
                       </div>
                       <div className="ProductPage-item-details-Quantity-div">
                           <h4>KG : </h4><input type="number" id="quantity" name="quantity" min="1" max="10" value="1" step="2"/>
                       </div>
                       <div className="ProductPage-item-details-button-div">
                           <button>Add</button><button>Buy</button>
                       </div>
                    </div>
                </div>

                <div className="item ProductPage-item3-div">
                    <div className="ProductPage-item-image-div">
                       <img src="Assets/pic.jpg" alt="Fishing scenery" className="ProductPage-item-image" />
                   </div>
                   <div className="ProductPage-item-details-div">
                        <div className="ProductPage-item-details-StarReview-div">
                           <div className="ProductPage-item-details-star-div">
                               <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                           </div> 
                            <p>  (10 Reviews)</p>
                        </div>
                       <div className="ProductPage-item-details-itemName-div">
                           <h3>Crab</h3> <h5>Rs. 200/KG</h5>
                       </div>
                       <div className="ProductPage-item-details-Quantity-div">
                           <h4>KG : </h4><input type="number" id="quantity" name="quantity" min="1" max="10" value="1" step="2"/>
                       </div>
                       <div className="ProductPage-item-details-button-div">
                           <button>Add</button><button>Buy</button>
                       </div>
                    </div>
                </div>

                <div className="item ProductPage-item3-div">
                    <div className="ProductPage-item-image-div">
                       <img src="Assets/pic.jpg" alt="Fishing scenery" className="ProductPage-item-image" />
                   </div>
                   <div className="ProductPage-item-details-div">
                        <div className="ProductPage-item-details-StarReview-div">
                           <div className="ProductPage-item-details-star-div">
                               <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                           </div> 
                            <p>  (10 Reviews)</p>
                        </div>
                       <div className="ProductPage-item-details-itemName-div">
                           <h3>Crab</h3> <h5>Rs. 200/KG</h5>
                       </div>
                       <div className="ProductPage-item-details-Quantity-div">
                           <h4>KG : </h4><input type="number" id="quantity" name="quantity" min="1" max="10" value="1" step="2"/>
                       </div>
                       <div className="ProductPage-item-details-button-div">
                           <button>Add</button><button>Buy</button>
                       </div>
                    </div>
                </div>


            </div>


            <div className="ProductPage-content-button-div"><button className="ProductPage-button">Load..</button></div>


       </div>
   );
}

export default ProductComponent;