import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StyleChanger } from './components/styleChanger'
import { StyleSelector } from './components/styleSelector'

function App() {
  const [count, setCount] = useState<number>(0)
  const [nome, setNome] = useState<string>("Anônimo")

  const styles = [
    'axist.min.css',
    'bahunya.min.css',
    'bamboo.min.css',
    'bolt.min.css',
    'classless.min.css',
    'classless_v1.min.css',
    'cssbed.dark.css',
    'holiday.css@0.11.5.css',
    'marx.css',
    'marx.min.css',
    'mvp.css',
    'new.min.css',
    'normalize.css',
    'pico.amber.css',
    'pico.blue.css',
    'pico.classless.amber.css',
    'pico.classless.blue.css',
    'pico.classless.css',
    'pico.classless.cyan.css',
    'pico.classless.fuchsia.css',
    'pico.classless.green.css',
    'pico.classless.grey.css',
    'pico.classless.indigo.css',
    'pico.classless.jade.css',
    'pico.classless.lime.css',
    'pico.classless.orange.css',
    'pico.classless.pink.css',
    'pico.classless.pumpkin.css',
    'pico.classless.purple.css',
    'pico.classless.red.css',
    'pico.classless.sand.css',
    'pico.classless.slate.css',
    'pico.classless.violet.css',
    'pico.classless.yellow.css',
    'pico.classless.zinc.css',
    'pico.colors.css',
    'pico.css',
    'pico.cyan.css',
    'pico.fluid.classless.amber.css',
    'pico.fluid.classless.blue.css',
    'pico.fluid.classless.css',
    'pico.fluid.classless.cyan.css',
    'pico.fluid.classless.fuchsia.css',
    'pico.fluid.classless.green.css',
    'pico.fluid.classless.grey.css',
    'pico.fluid.classless.indigo.css',
    'pico.fluid.classless.jade.css',
    'pico.fluid.classless.lime.css',
    'pico.fluid.classless.orange.css',
    'pico.fluid.classless.pink.css',
    'pico.fluid.classless.pumpkin.css',
    'pico.fluid.classless.purple.css',
    'pico.fluid.classless.red.css',
    'pico.fluid.classless.sand.css',
    'pico.fluid.classless.slate.css',
    'pico.fluid.classless.violet.css',
    'pico.fluid.classless.yellow.css',
    'pico.fluid.classless.zinc.css',
    'pico.fuchsia.css',
    'pico.green.css',
    'pico.grey.css',
    'pico.indigo.css',
    'pico.jade.css',
    'pico.lime.css',
    'pico.orange.css',
    'pico.pink.css',
    'pico.pumpkin.css',
    'pico.purple.css',
    'pico.red.css',
    'pico.sand.css',
    'pico.slate.css',
    'pico.violet.css',
    'pico.yellow.css',
    'pico.zinc.css',
    'sakura.css',
    'sakura-dark.css',
    'sakura-dark-solarized.css',
    'sakura-earthly.css',
    'sakura-ink.css',
    'sakura-pink.css',
    'sakura-radical.css',
    'sakura-vader.css',
    'simple.css',
    'stylize.css',
    'tiny.min.css',
    'water.css',
    'water.dark.css',
  ]

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
      {/* {styles.map((style) => { */}
      {/*   return <StyleChanger style={style}/> */}
      {/* })} */}
      <StyleSelector styles={styles}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
