import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/BannerSection/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1000px] mx-auto'>
          <Navber></Navber>
            <Banner></Banner>
          
      </div>
    </>
  )
}

export default App
