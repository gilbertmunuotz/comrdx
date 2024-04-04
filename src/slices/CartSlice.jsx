import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'MyCart', //Name Your Slice Here
    initialState: [], //Initialize the Initial State
    reducers: { //Define the Reducers and Actions Here
        Add_Item(state, action) {
            const newItem = action.payload;
            // Check if the item already exists in the cart
            const existingItem = state.find(item => item.id === newItem.id);
            // If the item exists, you can update its quantity or handle it as needed
            if (existingItem) {
                // For example, you can increase the quantity of the existing item
                existingItem.quantity += 1; //Not Yet Implemented
            } else {
                // If the item does not exist, add it to the cart
                state.push(newItem);
            }
        },
        Remove_Item(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const { Add_Item, Remove_Item } = cartSlice.actions;

export default cartSlice.reducer;
