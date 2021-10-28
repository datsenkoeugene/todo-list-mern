import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  SHOW_ALERT,
  SHOW_LOADER,
  HIDE_ALERT,
  HIDE_LOADER,
  ACTIVE_TODOS,
  COPLETED_TODOS,
  SEARCH_TODO,
  ACTIVE_BUTTON,
  ALL_TODOS
} from './types'

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader())
      const response = await fetch(`/api/todos`)
      const json = await response.json()
      setTimeout(() => {
        dispatch({ type: FETCH_TODOS, payload: json })
        dispatch(hideLoader())
      }, 500)
    } catch (e) {
      dispatch(showAlert('Something went wrong'))
      dispatch(hideLoader())
    }
  }
}

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      })
      const json = await response.json()
      setTimeout(() => {
        dispatch({ type: ADD_TODO, payload: json })
      }, 500)
    } catch (e) {
      dispatch(showAlert('Something went wrong'))
      dispatch(hideLoader())
    }
  }
}

export const removeTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      })
      const json = await response.json()
      setTimeout(() => {
        dispatch({ type: REMOVE_TODO, payload: json })
      }, 500)
    } catch (e) {
      dispatch(showAlert('Something went wrong'))
      dispatch(hideLoader())
    }
  }
}

export const checkTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
      })
      const json = await response.json()
      setTimeout(() => {
        dispatch({ type: CHECK_TODO, payload: json })
      }, 500)
    } catch (err) {}
  }
}

export const showLoader = () => ({
  type: SHOW_LOADER,
})

export const hideLoader = () => ({
  type: HIDE_LOADER,
})

export const showAlert = (text) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export const hideAlert = () => ({
  type: HIDE_ALERT,
})

export const completeTodos = () => ({
  type: COPLETED_TODOS,
})

export const activeTodos = () => ({
  type: ACTIVE_TODOS,
})

export const searchTodo = (todoName) => ({
  type: SEARCH_TODO,
  payload: todoName,
})

export const activeButton = (name) => ({
  type: ACTIVE_BUTTON,
  payload: name,
})

export const allTodos = () => ({
  type: ALL_TODOS,
})