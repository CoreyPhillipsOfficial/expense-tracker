import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { expenseReducer } from '../reducers/expenses';

const reducer = combineReducers({
    expenses: expenseReducer
});

const initialState = {}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
});

export default store;