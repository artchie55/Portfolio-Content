import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Video from './components/Video'
import Faqs from './components/Faqs'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home />
     <Video />
     <Faqs />
    </>
  )
}

export default App
