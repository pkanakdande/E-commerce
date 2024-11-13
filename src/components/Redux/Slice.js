import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartslice = createSlice({
    name: "cart",
    initialState, 
    reducers: {
        add(state, action) {
            state.push(action.payload);
           
            localStorage.setItem('cart', JSON.stringify(state));
        },
        remove(state, action) {
            const updatedState = state.filter(item => item.id !== action.payload);
          
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;
        }
    }
});


export const { add, remove } = cartslice.actions;
export default cartslice.reducer;
