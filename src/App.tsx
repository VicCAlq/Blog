import { BrowserRouter, Routes, Route } from "react-router";
import { NavBar } from './components/navigation';
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Articles } from "./pages/articles";
import Playground from './Playground.tsx';
import * as Content from "./articles/000_index.tsx";

type ContentShape = typeof Content.default;
type ContentKey = keyof ContentShape;

function App() {

  const articles = [];

  for (let key of Object.keys(Content.default)) {
    articles.push(Content.default[key as ContentKey]);
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Playground/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <footer>Criado por <a target='_blank' href='http://www.github.com/viccalq'>Victor Cavalcanti</a>. CSS criado por <a target='blank' href='http://www.github.com/kimeiga/bahunya'>Hakan Alpay</a> </footer>
    </BrowserRouter>
  );
}

export default App
