import { FaRegUserCircle } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
// import styles from "./HeaderNav.module.css";
import Categories from "./Categories";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../server";
import { FaRegHeart } from "react-icons/fa6";

// import Categories from "./Categories";
function HeaderNav() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const {isSeller,seller} =useSelector((state)=>state.seller)
  const {cart } = useSelector((store) => store.cart);
  const {wishlist}=useSelector((state)=>state.wishlist)
  // console.log(isAuthenticated);
  return (
    <nav className="py-2 bg-body-tertiary border-bottom bg-dark text-white">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <a
              to="#"
              className="nav-link link-body-emphasis px-2 active"
              aria-current="page"
            >
              <Categories></Categories>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/"
              className="nav-link link-body-emphasis px-2 active"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a to="#" className="nav-link link-body-emphasis px-2"></a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link link-body-emphasis px-2">
              Products
            </a>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link link-body-emphasis px-2">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            {/* <a href="/shop-create" className="nav-link link-body-emphasis px-2 " style={{borderRadius:"5px"}}>
              <button className="bg-dark text-white " style={{borderRadius:"5px"}}>Become Seller</button>
             
            </a> */}
              {isSeller ? (
              <Link to="/dashboard">
               <button className="btn btn-dark " style={{borderRadius:"5px"}}>DashBoard</button>
              </Link>
            ) : (
              (
              (
                <Link to="/shop-create">
                        <button className="btn btn-dark " style={{borderRadius:"5px"}}>Become a Seller</button>
                </Link>
              ))
            )}
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link link-body-emphasis px-3">
              <div className="bag">
                <span className="position-absolute top-80  translate-middle badge rounded-pill bg-danger">
                  {wishlist && wishlist.length}<span className="visually-hidden">unread messages</span>
                </span>
                <FaRegHeart size={30} />
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/bag" className="nav-link link-body-emphasis px-3">
              <div className="bag">
                <span className="position-absolute top-80  translate-middle badge rounded-pill bg-danger">
                  {cart && cart.length}<span className="visually-hidden">unread messages</span>
                </span>
                <IoBagHandle size={30}></IoBagHandle>
              </div>
            </a>
          </li>
          <li className="nav-item">
            {isAuthenticated ? (
              <Link to="/profile">
                <img
                  src={`${backend_url}${user.avatar}`}
                  alt="loading....."
                  width="40"
                  height="40"
                  className="rounded-circle"
                ></img>
              </Link>
            ) : (
              (console.log(isAuthenticated),
              (
                <Link to="/login">
                  <FaRegUserCircle size={30} />
                </Link>
              ))
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
