import { createSlice } from '@reduxjs/toolkit';
 const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        //action
        //Add to wishlist
        addToWishlist(state,action){
            const product = action.payload;
            const existingProduct = state.items.find(item=>item.id===product.id);
            if(existingProduct){
                alert("Product already exist");
            }
            else{
                state.items.push(product);
                alert("Product added successfully...");
            }
        }
    }
 })
 export const {addToWishlist} = wishlistSlice.actions
 export default wishlistSlice.reducer