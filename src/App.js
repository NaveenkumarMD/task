import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Main from './Main'

import Adduserscreen from './Screens/Addnewuser'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main/>} />
      <Route path="/Adduser"  element={<Adduserscreen />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App