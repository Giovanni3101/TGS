import React from 'react';
import './index.css'

function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 class="text-3xl font-bold underline text-black">
        Hello world!
      </h1>
      <div className="mt-4 p-4 bg-white rounded shadow">
        <button className="btn btn-primary">
          Daisy UI Button
        </button>
      </div>
    </div>
  )
}

export default App
