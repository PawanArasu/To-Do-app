import React , {useState} from 'react'
import { TodoList } from './components/TodoList'


export default function App() {

    const [input , setInput] = useState("")
    const [todoList , setTodoList] = useState([])

    const handleTodo = (event) => {
        setInput( event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput("")
        setTodoList([...todoList , {text:input , id:Math.floor(Math.random() * 1000 )}])
        
    }


    return (
        <div>
            <div>
            <input
                
                value={input}
                onChange={handleTodo}
                type="text"

                />

                <button onClick={handleSubmit}>Add To-Do</button>
            </div>
            <TodoList todoLists={todoList} setTodoLists={setTodoList}/>
        </div>
    )
}