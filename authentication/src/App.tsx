import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

import tw from "tailwind-styled-components"
import Register from './Components/Register';

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
        <Register />
      </Container>
    </>
  )
}

export default App
