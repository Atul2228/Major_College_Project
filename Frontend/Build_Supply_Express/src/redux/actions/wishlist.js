import { wishlistActions } from "../reducers/wishlist";


export const addToWishlist = (data) => async (dispatch,getState) => {
   
        // const dispatch=useDispatch()
        dispatch(wishlistActions.addToWishlist(
            data
        ));
        localStorage.setItem("wishlistItems",JSON.stringify(getState().wishlist.wishlist));
        return data;
       
    }
    
       export const removeFromWishlist=(data)=> async(dispatch,getState)=>{
        dispatch(wishlistActions.removeFromWishlist(
            data._id
        ))
        localStorage.setItem("wishlistItems",JSON.stringify(getState().wishlist.wishlist));
        return data;
       }

 

