import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route element={<HomePage />} path='/' exact />
          <Route element={<Gallery />} path='/gallery' />
        </Routes>
      </Router>
  )
}

export default App
