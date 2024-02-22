// habitReducer.js
import { ADD_HABIT, UPDATE_HABIT, DELETE_HABIT } from '../actions/actionTypes';

const initialState = {
  habits: [
    { id: 1, name: 'Exercise' },
    { id: 2, name: 'Read' },
    { id: 3, name: 'Meditate' },
  ],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case UPDATE_HABIT:
      return {
        ...state,
        habits: state.habits.map(habit =>
          habit.id === action.payload.id ? { ...habit, ...action.payload } : habit
        ),
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload),
      };
    default:
      return state;
  }
};

export default habitReducer;
