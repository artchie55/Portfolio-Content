import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Signup from'./Components/Signup'
import Login from './Components/login'
import { AuthProvider } from './Components/AuthContext';

import './App.css'

function App() {
  

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
