import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReactPage from './pages/ReactPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-articles' element={<ReactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
