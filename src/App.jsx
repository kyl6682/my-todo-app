import './App.css'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div className='container'>
        <header>헤더 자리</header>
        <main>
          <TodoList />
        </main>
      </div>
    </>
  )
}

export default App
