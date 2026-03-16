import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from '../slices/wishlistSlice'

const store = configureStore({
reducer:{

    wishlist:WishlistSlice
}

})

export default store