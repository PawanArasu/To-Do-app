import React , {useState} from 'react'


export default function UI() {

    const [todo , setTodo] = useState({
        todomsg:""
    })

    const [todoUpd , setTodoUpd] = useState([
        
    ])

    const handleTodo = (event) => {
        setTodo({...todo , todomsg:event.target.value})

    }

    const pushTodos = () => {
        setTodoUpd(oldArray => [...oldArray , todo])
    }

    console.log(todoUpd)


    const handleSubmit = (event) => {
        event.preventDefault();

    }


    return (
        <div className='container-ui'>
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                placeholder='To-Do' 
                value={todo.todomsg}
                onChange={handleTodo} 
                className="todo-input" />

                <input 
                type='submit' 
                value='Add To-Do'
                className="todo-submit-btn"
                onClick={pushTodos}   />

                
            </form>
        </div>
    )
}