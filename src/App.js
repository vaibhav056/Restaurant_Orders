import React from 'react'
import Home from  './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CurrentOrder from './components/CurrentOrder'
export default function App() {
  return( <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/currentOrder' element={<CurrentOrder/>}/>
    </Routes>
    
  </BrowserRouter>
   

  </>
  );
}
