import React from 'react';

//Styles
import './App.css';

//Components
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';
import TodoImage from './components/TodoImage';

const todos = [
  {
    text: 'Terminar curso React.Js',
    completed: false
  },
  {
    text: 'Tomar curso practico API REST',
    completed: false
  },
  {
    text: 'Terminar ejercicio The Cat Api',
    completed: false
  },
]

function App() {
  return (
    <React.Fragment>
      <section className="container">
        <section className='add-todo__section'>
          <TodoSearch />
          <TodoButton />
          <TodoImage />
        </section>

        <section className='list__section'>
          <TodoCounter />
          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} />
            ))}
          </TodoList>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
