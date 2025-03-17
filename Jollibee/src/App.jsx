import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import PromoMenuitems from './assets/components/PromoMenuitems'
import Footer from './assets/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <Home />
    <PromoMenuitems />
    <Footer />
   </div>
  )
}

export default App
