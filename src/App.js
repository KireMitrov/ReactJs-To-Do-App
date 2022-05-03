import './App.css';
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';

function App() {
  return (
    <div className="App-header">
      <ToDoInput/>
      <ToDoList/>
    </div>
  );
}

export default App;
