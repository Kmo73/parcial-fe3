import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import styles from './styles/styles.module.css'


function App() {
  const [programador, setProgramador] = useState({
    nombre: '',
    lenguaje: ''
  })

  const {nombre, lenguaje} = programador

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handler = (e) => {
    e.preventDefault()
    if(nombre.length < 3 || nombre.startsWith(' ')){
      setError(true)
      setShow(false)
    } else if (lenguaje.length < 6){
      setError(true)
      setShow(false)
    } else{
      setError(false)
      setShow(true)
    } 
  }

  return (
    <div >
      <h3 style={{backgroundColor: 'black', padding: '1rem', marginBottom: '0'}}>Indica tu lenguaje de programación favorito:</h3>
      <form onSubmit={handler} className={styles.form}>
        <label>Nombre</label>
        <input type="text" onBlur={(e) => setProgramador({...programador, nombre: e.target.value})}/>
        <label>Lenguaje</label>
        <input type="text"onBlur={(e) => setProgramador({...programador, lenguaje: e.target.value})}/>
        <button>ENVIAR</button>
      </form>
      {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
      {show && <Card programador={programador}/>}
    </div>
  )
}

export default App
