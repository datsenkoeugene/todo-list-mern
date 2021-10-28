import React from 'react'
import { useDispatch } from 'react-redux'
import { searchTodo, allTodos } from '../../redux/actions'

const SearchForm = () => {
  const dispatch = useDispatch()
  const onSearchTodo = (e) => {
    e.preventDefault()
    if (e.target.value.trim() !== '') {
      dispatch(searchTodo(e.target.value))
    } else {
      dispatch(allTodos())
    }
  }

  return (
    <form>
      <div className='row'>
        <div className='col'>
          <input
            onChange={onSearchTodo}
            type='text'
            className='form-control'
            placeholder='Search todo'
          />
        </div>
      </div>
    </form>
  )
}

export default SearchForm
