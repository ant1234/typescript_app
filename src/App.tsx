import Todos from './components/Todos';
import TodoText from './models/todos';
import React from 'react';

function App() {
  const toDos = [
    new TodoText('Learn react'),
    new TodoText('Learn typescript'),
  ];

  return (
    <div className="App">
        <Todos items={toDos}/>
    </div>
  );
}

export default App;
