import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./reducers/user"
import { sellerSlice } from "./reducers/seller"
import { productSlice } from "./reducers/product"
import { cartSlice } from "./reducers/cart"
import { wishlistSlice } from "./reducers/wishlist"
const Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        seller:sellerSlice.reducer,
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        wishlist:wishlistSlice.reducer,


    }
})
export default Store