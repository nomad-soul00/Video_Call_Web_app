import { useState } from 'react'
import './App.css';
import VideoPlayer from './components/VideoPLayer.jsx';
import Notifications from './components/Notifications.jsx';
import Options from './components/Options.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 w-screen h-screen text-white flex flex-col items-center gap-4 '>
        <div className='p-5 font-semibold tracking-wider bg-gray-800 w-fit h-fit mt-4 rounded-2xl text-2xl text-center'>
          Video Chat App
        </div>

        <div>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
      </div>

    </>
  )
}

export default App
