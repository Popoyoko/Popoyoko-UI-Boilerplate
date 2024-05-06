import { useState } from 'react'
import Popoyoko from './assets/Popoyoko.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://github.com/Popoyoko" target="_blank">
          <img src={Popoyoko} className="logo" alt="Popoyoko logo" />
        </a>
      </div>
      <h1>Popoyoko Boilerplate</h1>
      <p className="read-the-docs">
        Click on the Popoyoko logo to learn more
      </p>
    </>
  )
}

export default App
