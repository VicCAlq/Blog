import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from './components/navigation';
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Articles } from "./pages/articles";
import { Aside } from './components/aside.tsx';
import Playground from './Playground.tsx';

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
