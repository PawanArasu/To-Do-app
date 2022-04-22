import React , {useState}from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export default  function  ToDo()  {
  <input
                
  value={input}
  onChange={handleTodo}
  type="text"

  />

  <button type='submit'>Add To-Do</button>

  return (
    <div>
        <TodoForm input={input} setInput={setInput}/>
    </div>
  )
}
