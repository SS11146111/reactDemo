import Task from "./tasksP/Task";
import "./App.css";
import Header from "./components/Header";
/*import Counter from "./counterP/Counter";*/


function App() {
  const info = "Hi";
  return (
    <div className="App">
      {/*<Counter/>*/}
      <Header/>
      <Task title="Welcome" info={info}/>
    </div>
  );
}

export default App;
