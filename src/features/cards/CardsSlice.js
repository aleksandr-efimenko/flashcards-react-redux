import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                front: action.payload.front,
                back: action.payload.back,
                id: action.payload.id
            }
        }
    }
})

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;