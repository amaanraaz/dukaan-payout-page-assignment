import { useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div>
          <Header />
          <Body />
        </div>
      </div>
    </>
  )
}

export default App
