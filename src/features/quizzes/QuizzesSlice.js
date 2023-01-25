import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            return {
                ...state,
                quizzes: {
                    ...state.quizzes,
                    [action.payload.id]: {
                        name: action.payload.name,
                        topicId: action.payload.topicId,
                        cardIds: action.payload.cardIds
                    }
                }
            }
        }
    }
});

export const createQuizAndConnectTopic = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'quizzes/addQuiz',
            payload: {
                name: payload.name,
                topicId: payload.topicId,
                cardIds: payload.cardIds
            }
        })
        dispatch({
            type: 'topics/addQuizToTopic',
            payload: {
                topicId: payload.topicId,
                quizId: payload.quizId
            }
        })
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;