import React from 'react'


export const TodoList = (props) => {

  function deleteItems(id) {

   const newList = props.itemLists.filter(items => {
     return items.id !== id
   })

   props.setTodoLists(newList)

  }

  return (
    <div>
   {props.todoLists.map((items) => {
     return (<div>
       <p>{items.text}<button onClick={() => deleteItems(items.id)}>x</button></p>
       </div>)
   })}
   </div>
  )
}
