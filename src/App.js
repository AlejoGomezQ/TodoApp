import React from 'react';

//Styles
import './App.css';

//UI
import AppUI from './AppUI';

//Provider
import { TodoProvider } from './todocontext';

//  const defaultTodos = [
//    {
//      text: 'Terminar curso React.Js',
//      completed: true
//    },
//    {
//      text: 'Tomar curso practico API REST',
//      completed: false
//    },
//    {
//      text: 'Terminar ejercicio The Cat Api',
//      completed: false
//    },
//  ]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;