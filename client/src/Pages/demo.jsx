
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";


const HomePage = () => {
    return (
    <div className="container-fluid homePage-main-div">
        <div className="row homePage-top-div">
            <div className="col-md-6 homePage-top-left-div">
                logo
            </div>
            <div className="col-md-6 homePage-top-right-div">
            <IoIosPerson /><FaShoppingCart /><FaSearch />
            </div>
        </div>
        <div className="row homePage-bottom-div">
            <div>
                <img src="Assets/pic.jpg" alt="Fishing scenery" className="homePage-bottom-image" />
            </div>
            <div>
                <input type="search" className="homePage-bottom-image-search-box" placeholder="       Search fish,crab and etc...."> <MdOutlineManageSearch /></input>
            </div>
        </div>
    </div>
    );
}

export default HomePage;
