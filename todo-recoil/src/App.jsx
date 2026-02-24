import TaskFilters from './components/TaskFilters'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>To-do List com Recoil</h1>
      <TaskInput />
      <TaskFilters />
      <section>
        <TaskList />
      </section>
    </main>
  )
}

export default App
