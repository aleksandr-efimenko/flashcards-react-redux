import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
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
                        icon: action.payload.iconUrl,
                        quizIdds: []
                    }
                }
            }
        }
    }
});

export const selectTopics = (state) => state.topics;

export const { addTopic } = topicsSlice.actions;

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