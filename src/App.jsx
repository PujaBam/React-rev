import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/bootstrap.bundle'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Nabar'
import About from './About'
import Abc from './xyz';

//  import { Switch, Router, Redirect } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar/>
    <About/>
    <Abc/>
    {/* <Switch>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='/firstpage' element={<About/>}></Route>
          
        </Route>
      </Routes>
    </Switch> */}
    
      
    
    
    </>
      
      
  )
}

export default App;
