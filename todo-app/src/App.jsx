import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoCom from './components/TodoCom'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = {text: text.trim()};
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].iscompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
    <h1>To-Do App</h1>
    <hr />
    {
      todos.map((todo, index) =>(
        <TodoCom key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}/>))
    }
    <TodoForm addtodo={addTodo}/>
    </div>
    
  );
};

export default App;