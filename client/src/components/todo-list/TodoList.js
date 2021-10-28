import React, { useEffect } from 'react'
import ListItem from '../list-item/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../../redux/actions'
import Spinner from '../spinner/Spinner'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos)
  const searchTodos = useSelector(state => state.todos.searchTodos)
  const loading = useSelector((state) => state.app.loading)
  const currentList = searchTodos.length  ? searchTodos : todos

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (currentList.length) {
    return (
      <ul className='list-group my-2'>
        {currentList.map(({ title, completed, _id }) => {
          return (
            <ListItem key={_id} title={title} id={_id} completed={completed} />
          )
        })}
      </ul>
    )
  } else {
    return <h2 className='text-center my-2'>No todo</h2>
  }
}

export default TodoList
