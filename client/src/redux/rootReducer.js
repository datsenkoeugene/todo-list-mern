import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  todos: todoReducer,
  app: appReducer,
})
