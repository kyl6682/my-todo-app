import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <main>
          <TodoList />
        </main>
      </div>
    </>
  )
}

export default App
