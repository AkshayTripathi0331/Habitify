// habitActions.js
import { ADD_HABIT, UPDATE_HABIT , DELETE_HABIT} from './actionTypes';

export const addHabit = (habit) => ({
  type: ADD_HABIT,
  payload: habit,
});

export const updateHabit = (habit) => ({
  type: UPDATE_HABIT,
  payload: habit,
});

export const deleteHabit = (id) => ({
  type: DELETE_HABIT,
  payload: id,
})
