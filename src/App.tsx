import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from './components/navigation';
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Articles } from "./pages/articles";
import { Aside } from './components/aside.tsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyleSelector } from './components/styleSelector'
import Playground from './Playground.tsx';

function Table() {
  return(
    <table>
      <thead>
        <tr>
          <td>1st column</td>
          <td>2nd column</td>
          <td>3rd column</td>
          <td>4th column</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>R1 C1</td>
          <td>R1 C2</td>
          <td>R1 C3</td>
          <td>R1 C3</td>
        </tr>
        <tr>
          <td>R2 C1</td>
          <td>R2 C2</td>
          <td>R2 C3</td>
          <td>R2 C3</td>
        </tr>
        <tr>
          <td>R3 C1</td>
          <td>R3 C2</td>
          <td>R3 C3</td>
          <td>R3 C3</td>
        </tr>
      </tbody>
    </table>
  )
}

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Aside type='default'>
        <h3>Some aside content</h3>
        <p>Some example text</p>
        <p>Some example text</p>
        <p>Some example text</p>
        <p>Some example text</p>
      </Aside>
      <Routes>
        <Route path='/' element={<Playground/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <footer>Alô mamãe</footer>
    </BrowserRouter>
  )
}

export default App
