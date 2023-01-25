import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizReducer from '../features/quizzes/QuizzesSlice';
import cardsReducer from '../features/cards/CardsSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
