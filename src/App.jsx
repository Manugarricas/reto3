import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'

function App() {
  const [task, setTask] = useState("");

  const tasks = ReactDOM.createRoot(document.getElementById('tasks'))

    function Task({name}) {

      return (
        <> <br />
          <h2 id='name'>{name}</h2><button onClick={setTask('')}>X</button>
        </>
      )
    }

  function addTask() {
    tasks.render(<Task name={task}></Task>);
  }

  return (
    <>
      <input type='text' id='input' onChange={e => setTask(e.target.value)}></input>
      <button type='submit' onClick={addTask}>Add</button>
    </>
  )
  
}

export default App
