import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "./ProductCard";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../redux/actions/product";
const Products = () => {
  const [searchParams] = useSearchParams();
  // const categoryData = searchParams.get("category");
  // const { products } = useSelector((state) => state.products);
  const { allProducts } = useSelector((state) => state.products);
  // console.log(allProducts);
  // const { seller } = useSelector((state) => state.seller);
  // const [data, setData] = useState([]);
  
 
  // useEffect(() => {
  //   // if (categoryData === null) {
  //   //   const d = allProducts;
  //   //   setData(d);
  //   // } else {
  //   //   const d =
  //   //   allProducts && allProducts.filter((i) => i.category === categoryData);
  //   //   setData(d);
  //   // }
  //   //    window.scrollTo(0,0);
  // }, [allProducts]);
  return (
    <>
      <div>
        <div className="container" style={{padding:""}}>
          <div className="row my-lg-4 my-0"style={{padding:"3%"}}>
          {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {allProducts && allProducts.length === 0 ? (
          <h1 >
            No products Found!
          </h1>
        ) : null}
         
            {/* {data && data.map((i,index) => (
              <ProductCard data={i} key={index}></ProductCard>
            ))}
          
            {allProducts && allProducts.length === 0 ? <h1>No Product Matched</h1> : null} */}
          </div>
        </div>
     
    </>
  );
};
export default Products;
