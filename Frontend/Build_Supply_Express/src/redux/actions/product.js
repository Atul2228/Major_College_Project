import axios from "axios";
import { server } from "../../server";
import { productActions } from "../reducers/product";

// // create product
// export const createProduct =
//   (
//     name,
//     description,
//     category,
//     tags,
//     originalPrice,
//     discountPrice,
//     stock,
//     shopId,
//     images
//   ) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//        productActions.prod
//       });

//       const { data } = await axios.post(
//         `${server}/product/create-product`,
//         name,
//         description,
//         category,
//         tags,
//         originalPrice,
//         discountPrice,
//         stock,
//         shopId,
//         images,
//       );
//       dispatch({
//         type: "productCreateSuccess",
//         payload: data.product,
//       });
//     } catch (error) {
//       dispatch({
//         type: "productCreateFail",
//         payload: error.response.data.message,
//       });
//     }
//   };

// // get All Products of a shop
// export const getAllProductsShop = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllProductsShopRequest",
//     });

//     const { data } = await axios.get(
//       `${server}/product/get-all-products-shop/${id}`
//     );
//     dispatch({
//       type: "getAllProductsShopSuccess",
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllProductsShopFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // delete product of a shop
// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteProductRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/product/delete-shop-product/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: "deleteProductSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteProductFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// // get all products
// export const getAllProducts = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllProductsRequest",
//     });

//     const { data } = await axios.get(`${server}/product/get-all-products`);
//     dispatch({
//       type: "getAllProductsSuccess",
//       payload: data.products,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllProductsFailed",
//       payload: error.response.data.message,
//     });
//   }
// };
export const createProduct=(newForm)=>async(dispatch)=>{
    try{
        console.log(newForm);
        dispatch((productActions.productCreateRequest()));
        const config={headers:{"Content-Type":"multipart/form-data"}}
              const { data } = await axios.post(
        `${server}/product/create-product`,
       newForm,
       config,
       
    //    {
    //     withCredentials: true
    //    }
       
      );
      dispatch((productActions.productCreateSuccess(
        data.products,
      )));

    }catch(error){
        dispatch(productActions.productCreateFail(
            error.response.data.message
        ))

    }
}

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch((productActions.getAllProductsShopRequest()));
    const { data } = await axios.get(
        `${server}/product/get-all-products-shop/${id}`,
  
      );

      dispatch(productActions.getAllProductsShopSuccess(
       data.products
    ))
  } catch (error) {
    dispatch(productActions.getAllProductsShopFailed(
        error.response.data.message
    ))
   
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(productActions.deleteProductRequest())

    const { data } = await axios.delete(
              `${server}/product/delete-shop-product/${id}`,
              {
                withCredentials: true,
              }
            );
            dispatch(productActions.deleteProductSuccess(
                data.message
            ))
  
  } catch (error) {
    dispatch(productActions.deleteProductFailed(
        error.response.data.message
    ))
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
   
    dispatch(productActions.getAllProductsRequest())
    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch(productActions.getAllProductsSuccess(
      data.products
    ))
   
  } catch (error) {
    dispatch(productActions.getAllProductsFailed(
      error.response.data.message
  ))
    
  }
};