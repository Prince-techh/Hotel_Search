import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
import Home from "./pages/Home";
import HotelDetail from './pages/HotelDetail'
import NotFound from './pages/NotFound'
import Layout from './Layout/Layout';


function App() {
  return (
    <>
<Routes>
  <Route path="/" element= {<Layout />} >
     <Route index element={<Home />} />
     <Route path="hotel/:id" element={<HotelDetail />} />
     <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
    </>
  )
}

export default App
