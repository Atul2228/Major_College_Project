import { cartActions } from "../reducers/cart";


export const addToCart = (data) => async (dispatch,getState) => {
   
        // const dispatch=useDispatch()
        dispatch(cartActions.addToCart(
            data
        ));
        // const { data } = await axios.get(`${server}/user/getuser`, {
        //     withCredentials: true
        // })
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
        return data;
       
    }
    
       export const removeFromCart=(data)=> async(dispatch,getState)=>{
        dispatch(cartActions.removeFromCart(
            data._id
        ))
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
        return data;
       }

 

