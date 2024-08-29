import './App.css'
import Signup from './signup'

import Login from './login'

import HomePage from './homepage'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Bot from './bot'

import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/" element= {<HomePage/>}></Route>
        <Route path="/chatbot" element= {<Bot/>}></Route>
      </Routes>

      <ToastContainer/>
      </BrowserRouter>
      
    </>

  )
}

export default App
