import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  allTodos,
  activeButton,
  activeTodos,
  completeTodos,
} from '../../redux/actions'
import classNames from 'classnames'

const FilterPanel = () => {
  const filterButtons = useSelector((state) => state.todos.filterButtons)
  const isActive = useSelector((state) => state.todos.isActive)
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()
  const onFilterChange = (name) => {
    if (name === 'all') {
      dispatch(allTodos())
      dispatch(activeButton(name))
    } else if (name === 'done') {
      if (todos.filter(({ completed }) => completed === true).length > 0) {
        dispatch(completeTodos())
        dispatch(activeButton(name))
      } else {
        dispatch(allTodos())
        dispatch(activeButton('all'))
      }
    } else if (name === 'active') {
      if (todos.filter(({ completed }) => completed === false).length > 0) {
        dispatch(activeTodos())
        dispatch(activeButton(name))
      } else {
        dispatch(allTodos())
        dispatch(activeButton('all'))
      }
    }
  }
  return (
    <div className='btn-group d-flex my-2'>
      {filterButtons.map(({ label, name }) => {
        return (
          <button
            type='button'
            className={classNames('btn btn-outline-success', {
              active: isActive === name,
            })}
            key={name}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterPanel
