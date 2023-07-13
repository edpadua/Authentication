import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import tw from "tailwind-styled-components"
import Register from './Components/Register';

import Login from './Components/Login';

const Container = tw.div`
     w-full 
     px-16 
     py-10
`;

function App() {


  return (
    <>
      <Navbar />
      <Container>
         <Register/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
