import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

// function App() {
//   const array = ['Academia', 'Almoço', 'Estudar', 'Ler'];
//   return (
//     <ul>
//       <li>{array.map( (item) => Task(item))}</li>
//     </ul>
//   );
// }

// export default App;


const listaDeTarefas = ['Academia', 'Almoço', 'Estudar', 'Ler'];

class App extends React.Component {
  render() {
    return (
      <ul>{ listaDeTarefas.map(tarefa => Task(tarefa))}</ul>
    )
  }
}

export default App;