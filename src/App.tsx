import { useState } from 'react'
import InfoSection from './Components/InfoSection'
import PlayGround from './Components/PlayGround'

function App() {

  return (
    <div className='w-full  min-h-screen max-h-screen bg-mainColor relative flex flex-col items-between gap-8 lg:flex-row md:gap-0'>
      <InfoSection />
      <PlayGround />
    </div>
  )
}

export default App
