import React, {useState} from 'react'


export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [content, setTodoContent] = useState("")

    const addTodo = () => {
        const todo = {
            id: Date.now(),
            content: content,
        }
        setTodos(prevTodos => [...prevTodos, todo])
        setTodoContent('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div>
        <h1>Todos</h1>
        <div>
            <input type="text" value={content} onChange={e => setTodoContent(e.target.value)} placeholder='Enter todo here...' />
            <button onClick={addTodo}>Add</button>
        </div>
        <div>
            <h2>Todos</h2>
            {
                  todos.map((todo) => 
                  (
                    <div key={todo.id}>
                   <p>
                      {todo.content}
                   </p>   
                    <button onClick={() => deleteTodo(todo.id)}>
                        Delete
                    </button>
                    </div>
                  ))
                
            }
        </div>
    </div>
  )
}
