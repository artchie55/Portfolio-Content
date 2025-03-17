import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IslandComponent from './Components/IslandComponent'
import PoolsComponent from './Components/PoolsComponent';
import BeachFrontComponent from './Components/BeachFrontComponent';
import CountrySideComponent from './Components/CountrySideComponent';
import TopCitiesComponent from './Components/TopCitiesComponent';
import MansionsComponent from './Components/MansionsComponent';
import TropicalComponent from './Components/TropicalComponent';
import CastleComponent from './Components/CastleComponent';
import ContainerComponent from './Components/ContainerComponent';


function App() {
  

  return (
    <>
    
    
      
     
       <Router>
        <Routes>
          <Route index element={<IslandComponent />} />
          <Route path='/Islands' element={<IslandComponent />} />
          <Route path='/Pools' element={<PoolsComponent />} />
          <Route path='/BeachFront' element={<BeachFrontComponent />} />
          <Route path='/CountrySide' element={<CountrySideComponent />} />
          <Route path='/TopCities' element={<TopCitiesComponent />} />
          <Route path='/Mansions' element={<MansionsComponent />} />
          <Route path='/Tropical' element={<TropicalComponent />} />
          <Route path='/Castles' element={<CastleComponent />} />
          <Route path='/Containers' element={<ContainerComponent />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
