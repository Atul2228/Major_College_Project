// import { productData } from "../static/data";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
// import { useSelector } from "react-redux";
import { getAllProductsShop} from "../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";


const BestDeals = () => {
  // const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  // console.log(allproducts);
  // const { seller } = useSelector((state) => state.seller);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllProductsShop(seller?._id));
  //   // console.log(products);
  //   // let newArray =products.slice(0, 5);
  //   // setData(newArray);
  // }, [dispatch, seller?._id]);


  // useEffect(() => {

    
  //   // const d=products && products.sort((a,b)=>b.sold_out - a.sold_out) ;
  //   // const firstFive = d.slice(0, 5);
  //   // setData(firstFive);
  // }, []);
  // useEffect(() => {
  //   dispatch(getAllProductsShop(seller._id));
  // }, [dispatch, seller._id]);
  // console.log(products);

  return (
    <>
      <div>
        <h1>Best Deals </h1>
      </div>
      <div className="container">
        <div className="row my-lg-4 my-0">
          {allProducts &&
           allProducts.map((item, index) => {
              return <ProductCard key={index} data={item}></ProductCard>;
            })}
        </div>
      </div>
    </>
  );
};
export default BestDeals