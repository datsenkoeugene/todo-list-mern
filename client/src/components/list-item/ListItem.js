import React from 'react'
import './ListItem.scss'
import ReactTooltip from 'react-tooltip'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import {
  removeTodo,
  checkTodo,
  allTodos,
  activeButton,
} from '../../redux/actions'

const ListItem = ({ title, completed, id }) => {
  const dispatch = useDispatch()
  const onRemoveTodo = (id) => {
    const question = window.confirm('Delete this todo ?')
    if (question) {
      dispatch(removeTodo(id))
      dispatch(allTodos())
      dispatch(activeButton('all'))
    }
  }

  const onCheckTodo = (id) => {
    const question = window.confirm('Completed this todo ?')
    if (question) {
      dispatch(checkTodo(id))
      dispatch(allTodos())
      dispatch(activeButton('all'))
    }    
  }

  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className={classNames({ complete: completed })} data-tip={title} >
        {title}
      </span>
      <ReactTooltip />
      <div className='btn-group'>
        <button
          onClick={() => onRemoveTodo(id)}
          type='button'
          className='btn btn-outline-danger rounded mr-2'
        >
          <i className='fas fa-trash'></i>
        </button>
        <button
          onClick={() => onCheckTodo(id)}
          type='button'
          className='btn btn-outline-success rounded'
          disabled={classNames({ complete: completed })}
        >
          <i className='fas fa-check'></i>
        </button>
      </div>
    </li>
  )
}

export default ListItem
