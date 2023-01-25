import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

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
                        cardIds: action.payload.cardIds,
                        id: action.payload.id
                    }
                }
            }
        }
    }
});

export const createQuizAndConnectTopic = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz({
            name: payload.name,
            topicId: payload.topicId,
            cardIds: payload.cardIds,
            id: payload.id
        })
        )
        dispatch(addQuizToTopic(
            {
                topicId: payload.topicId,
                quizId: payload.id
            })
        )
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;