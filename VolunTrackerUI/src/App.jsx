import { useState } from 'react'
import reactLogo from './assets/react.svg'
import voluntrackerLogo from '/VolunTrackerIcon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/">
          <img src={voluntrackerLogo} className="logo" alt="VolunTracker logo" />
        </a>
      </div>
      <h1>VolunTracker</h1>
      <div className="card">
        <p>
          Coming Soon!
            Hopefully...
        </p>
      </div>
    </>
  )
}

export default App
