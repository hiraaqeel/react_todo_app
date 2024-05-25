import React from 'react'

const todo = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <div className="container"
    style={{textDecoration: todo.iscompleted ? "line-trough" : ""}}
    >
      {todo.text}
      <div>
        <button className='button1' onClick={()=>completeTodo(index)}>
          ✅
        </button>
        <button className='button1' onClick={()=>removeTodo(index)}>
          ❎
        </button>
      </div>
    </div>
  )
}

export default todo;
