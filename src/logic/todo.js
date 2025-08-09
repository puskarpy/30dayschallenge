let todos = []

function addTodo(todo){
    todos = [...todos, todo]
}

function deleteTodo(id){
    todos =  todos.filter((todo) => Number(todo.id) !== id)
}

function displayTodo(){
    todos.forEach((todo)=>{
    console.log(todo.id, todo.content);
    
})
}

addTodo({
    id : 1,
    content:"First Todo"
})
addTodo({
    id : 2,
    content:"Second Todo"
})
addTodo({
    id : 3,
    content:"I added delete functionality, yayyy!!!"
})

deleteTodo(1)
displayTodo()