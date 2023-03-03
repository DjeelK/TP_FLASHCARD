import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name : "flashcards",
    initialState : {
        flashcards : [],
    },
    reducers: {
        
    addCardAction(state,action) {
    state.cards.push(action.payload)
    }
}
})

export const {addCardAction} = cardsSlice.actions

export default cardsSlice.reducer