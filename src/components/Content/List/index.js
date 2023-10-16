import React from 'react'
import Item from './Item';
import { useTodo } from '../../../contexts/ToDoContext';

let filtered = null;

function List() {
  const {todos, filter} = useTodo();

  filtered = todos;

  if(filter !== "all"){
    filtered = todos.filter((todo)=>
      filter === "active"
       ? todo.completed === false  && todo
       : todo.completed === true && todo
    );
  }
  
  return (
 
    <ul className="todo-list">
      {filtered.map((todo)=>(
        <Item key={todo.id} todo={todo}/>  
      ))}
          
    </ul>

  )
}

export default List