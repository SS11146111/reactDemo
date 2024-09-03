import Task from "./tasksP/Task";
import "./App.css";
import Header from "./components/Header";
/*import Counter from "./counterP/Counter";*/


function App() {

  return (
    <div className="App">
      {/*<Counter/>*/}
      <Header/>
      <Task title="Welcome"/>
    </div>
  );
}

export default App;
