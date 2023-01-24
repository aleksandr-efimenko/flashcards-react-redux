import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            // works both ways, with or without changing the state
            // state.topics[action.payload.id] = {
            //     name: action.payload.name,
            //     icon: action.payload.icon,
            //     quizIds: []
            // }
            return {
                ...state,
                topics:
                {
                    ...state.topics,
                    [action.payload.id]: {
                        name: action.payload.name,
                        icon: action.payload.icon,
                        quizIds: []
                    }
                }
            }
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;