import React from 'react';
import './index.css'
import {motion }  from 'framer-motion'

function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 class="text-3xl font-bold underline text-black">
        Hello world!
      </h1>
      <div className="mt-4 p-4 bg-white rounded shadow">
        <motion.button className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Daisy UI Button
        </motion.button>
      </div>
    </div>
  )
}

export default App
