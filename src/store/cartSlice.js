import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    showMenu: false
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart:(state,action) => {
            const newItem = action.payload
            const existingItem = state.itemsList.find(item => item.id === newItem.id)
            if(existingItem) {
                existingItem.quantity ++
                existingItem.totalPrice += newItem.price

            }else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price:newItem.price,
                    quantity: 1,
                    imageURL:newItem.imageURL,
                    totalPrice: newItem.price
                })
                state.totalQuantity++
                
            }
        },
        removeFromCart:(state, action) => {
            const id = action.payload
            const existingItem = state.itemsList.find(item => item.id === id)
            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
                
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        },
        setShowCart: (state) => {
            state.showCart = !state.showCart
        },
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        }
    }
    
})

export const cartAction = cartSlice.actions
export default cartSlice