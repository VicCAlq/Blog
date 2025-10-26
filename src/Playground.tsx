import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyleSelector } from './components/styleSelector'

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

function Playground() {
  const [count, setCount] = useState<number>(0)
  const [nome, setNome] = useState<string>("Anônimo")

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form id="name-setter">
        <input type="text" onChange={(e) => setNome(e.target.value)} defaultValue=""/>
      </form>
      <h3>Nome abaixo</h3>
      <p>{nome}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <pre><code className="language-css">{"p { color: red }"}</code></pre>
      <Table/>
      <StyleSelector styles={['App.css', 'bahunya.min.css', 'index.css', 'main.css']}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Playground

