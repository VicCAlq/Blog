import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
// import './styles/bahunya.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from './components/navigation';
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Articles } from "./pages/articles";
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar/>
      <aside>
        <h3>Some aside content</h3>
        <p>Some example text</p>
        <p>Some example text</p>
        <p>Some example text</p>
        <p>Some example text</p>
      </aside>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <footer>Alô mamãe</footer>
    </BrowserRouter>
  </StrictMode>,
)
