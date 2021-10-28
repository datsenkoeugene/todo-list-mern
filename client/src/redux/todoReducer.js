import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  SEARCH_TODO,
  ACTIVE_BUTTON,
  COPLETED_TODOS,
  ACTIVE_TODOS,
  ALL_TODOS
} from './types'

const initialState = {
  todos: [],
  searchTodos: [],
  isActive: 'all',
  filterButtons: [
    { name: 'all', label: 'All' },
    { name: 'done', label: 'Done' },
    { name: 'active', label: 'Active' },
  ],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],        
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(({ _id }) => _id !== action.payload)],
      }
    case CHECK_TODO:
      const idx = state.todos.findIndex(({ _id }) => _id === action.payload)
      const newTodo = {
        ...state.todos[idx],
        completed: !state.todos[idx].completed,
      }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          newTodo,
          ...state.todos.slice(idx + 1, state.todos.length),
        ],
      }
    case SEARCH_TODO:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(
            ({ title }) => title.indexOf(action.payload) > -1
          ),
        ],
      }

    case COPLETED_TODOS:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(({ completed }) => completed === true),
        ],
      }
    case ACTIVE_TODOS:
      return {
        ...state,
        searchTodos: [
          ...state.todos.filter(({ completed }) => completed === false),
        ],
      }
    case ACTIVE_BUTTON:
      return {
        ...state,
        isActive: action.payload,
      }
    case ALL_TODOS:
      return {
        ...state,
        todos: [...state.todos],
        searchTodos: [],
      }

    default:
      return state
  }
}
