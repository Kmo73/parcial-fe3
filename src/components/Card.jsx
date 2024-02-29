import React from 'react'
import styles from '../styles/styles.module.css'


const Card = ({programador}) => {

  return (
    <div className={styles.card}>
      <h4>¡Hola {programador.nombre}!</h4>
      <h4>Sabemos que serás un excelente desarrollador de {programador.lenguaje}</h4>
    </div>
  )
}

export default Card