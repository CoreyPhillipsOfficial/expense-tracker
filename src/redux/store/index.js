import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { expenseReducer } from '../reducers/expenses';

const rootReducer = combineReducers({
    expenses: expenseReducer
});

const initialState = {}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
});

export default store;