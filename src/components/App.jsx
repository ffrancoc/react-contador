import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'

function App({value}) {

  const [contador, setContador] = useState(value)

  const incrementHandle = () => {
    setContador(contador + 1)
  }

  const decrementHandle = () => {
    if ( contador > 0 ){
      setContador(contador - 1)
    }
  }

  const resetHandle = () => {
    setContador(value)
  }

  return (
    <div className='app-container'>
      <h1>Simple contador en React</h1>
      <h2>{ contador }</h2>
      <div>
        <button onClick={ incrementHandle }>+</button>
        <button onClick={ decrementHandle }>-</button>
        <button onClick={ resetHandle }>Reset</button>
      </div>
    </div>
  )
}

App.propTypes = {
  value: PropTypes.number.isRequired
}

App.defaultProps = {
  value: 10
}

export default App