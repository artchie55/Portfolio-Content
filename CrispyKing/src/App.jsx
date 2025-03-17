import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/navbar';
import Herosection from './components/Herosection';
import Content from './components/Content';
import Footer from './components/Footer';

import 'swiper/css/bundle';


AOS.init({
  once:true,
 duration:650, });

function App() {
  
  return (
    <div>
        <Navbar />
        <Herosection />
        <Content />
        <Footer />
    </div>
  )
}




export default App
