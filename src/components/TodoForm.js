import React from 'react'


export const TodoForm = ({input , setInput}) => {

    const handleTodo = (event) => {
        setInput({ input:event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

  return (
    <div>
        <div>
            <h1>ToDo App</h1>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <input
                
                value={input}
                onChange={handleTodo}
                type="text"

                />

                <button type='submit'>Add To-Do</button>
            </form>
        </div>
    </div>
  )
}
