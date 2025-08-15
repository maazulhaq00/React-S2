
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import AddStudent from './pages/AddStudent'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/counter' element={<CounterPage />} />
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
