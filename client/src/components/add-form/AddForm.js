import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions'

const AddForm = (props) => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()    

    const newTodo = {
      title: title.trim(),
      complete: false,
    }
    dispatch(addTodo(newTodo))
    setTitle('')
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col d-flex'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter new todo'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <button type='submit' className='btn btn-success'>
            <i className='fas fa-plus'></i>
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddForm
