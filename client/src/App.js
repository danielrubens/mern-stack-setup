import Todo from "./components/Todo";

function App() {
  const todos = [
    {id:1, title: 'wash the dishes', completed: false},
    {id:2, title: 'clean the house', completed: false},
    {id:3, title: 'cook hamburguer', completed: true}
  ]
  return (
    <div className="App">
      {todos.map((todo) => (<Todo todo={todo}/>))}
    </div>
  );
}

export default App;
