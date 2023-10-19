import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Netlify Deploy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click if you're netted up! 🕸️{count}
        </button>
      </div>

    </>
  )
}

export default App
