import Landing from './pages/Landing'
import { useState } from 'react'
import Menu from './pages/Menu'

function App() {
  const [landing, setLanding] = useState<boolean>(true)

  return (
    <>
      {/* {
        landing &&
        <Landing landingset={setLanding} />
      } */}
      <Menu />
    </>
  )
}

export default App
