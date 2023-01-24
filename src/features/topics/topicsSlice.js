import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
        }
    },
    reducers: {
        addTopic: (state, action) => {
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

// const state = {
//     topics: {
//         ['123']: {
//             name: 'name of topic',
//             icon: 'icon url'
//         }
//     }
// }

// console.log(state);
// function addTopic(topic) {
//     return {
//         ...state,
//         topics: {
//             ...state.topics,
//             [topic.id]: {
//                 name: topic.name,
//                 icon: topic.icon
//             }
//         }
//     }
// }
// const newState = addTopic({
//     id: uuidv4(),
//     name: 'John',
//     icon: 'URL for the topic'
// })

// console.log(newState);