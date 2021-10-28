import React from 'react'
import { useSelector } from 'react-redux'

const HeaderTodoList = () => {
  const todos = useSelector((state) => state.todos.todos)
  const completeTodos = todos.filter(({completed}) => completed === true)  
  return (
    <h1 className='text-center mt-2'>
      <span>All todo: {todos.length}</span>
      <span>, complete: {completeTodos.length}</span>
    </h1>
  )
}

export default HeaderTodoList
