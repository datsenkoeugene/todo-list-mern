import React from 'react'
import FilterPanel from '../filter-panel/FilterPanel'
import TodoList from '../todo-list/TodoList'
import AddForm from '../add-form/AddForm'
import HeaderTodoList from '../header-todo-list/HeaderTodoList'
import SearchForm from '../search-form/SearchForm'
import { useSelector } from 'react-redux'
import Alert from '../alert/Alert'

const App = () => {
  const alert = useSelector((state) => state.app.alert)  
  return (
    <div className='container'>
      <HeaderTodoList />
      {alert && <Alert alertStyle={'danger'} text={alert} />}
      <FilterPanel />
      <AddForm />
      <TodoList />
      <SearchForm />
    </div>
  )
}

export default App
