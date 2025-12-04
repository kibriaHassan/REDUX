import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || []

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const index = state.findIndex(item => item.id === id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
        }
    },
})

export const { addToCart, removeItem } = cartSlice.actions

export default cartSlice.reducer