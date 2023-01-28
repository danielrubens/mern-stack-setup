import React from 'react'

const Todo = () => {
  const todos = [
    {id:1, title: 'wash the dishes', completed: false},
    {id:2, title: 'clean the house', completed: false},
    {id:3, title: 'cook hamburguer', completed: true}
  ]
  const createTask = (object) => {
    const { id, title, completed} = object ;
    const h1 = <h1>{title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1
    return (<div key={id} data-testid={`todo-${id}`}>{text}</div>)
  }

  return (
    <>
    {todos.map((i) => createTask(i))}
    </>
  )
}

export default Todo