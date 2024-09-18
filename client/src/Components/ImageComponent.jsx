import React from "react";
import '../CSS/ImageComponent.css';
import { RiArrowRightLine } from "react-icons/ri";

const ImageComponent = () => {
    return(
        <div id="Image-section" className="main-div">
            <div className="homePage-image-div">
                <img src="Assets/pic.jpg" alt="Fishing scenery" className="homePage-bottom-image" />
            </div>
            <div className="homePage-bottom-content-div">
                <div className="homePage-bottom-content1-div"> Experience the <br /> best from nature.</div>
                <div className="homePage-bottom-content2-div">A prominent & well established <br />seafood collection</div>
                <button className="homepage-bottom-button">
                    See Our Collection <RiArrowRightLine className="homepage-bottom-RiArrowRightLine" />
                </button>
            </div>
        </div>
    );
}

export default ImageComponent;
