import React, {useState} from 'react'

function TodoForm({addtodo}) {
  const [value, setValue] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    if(!value.trim()){
      alert("Empty to-do can't be save.");
      return;
    }
    addtodo(value);
    setValue("");
  }
  return (
    <form className='todo-form' onSubmit={()=>handleSubmit}>
      <input type="text" className='input' placeholder='add todo...' value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default TodoForm;
