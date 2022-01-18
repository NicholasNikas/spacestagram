import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<HomePage />} path='/' exact />
          <Route element={<Gallery />} path='/gallery' />
        </Routes>
      </Router>
    </div>
  )
}

export default App