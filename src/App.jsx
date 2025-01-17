import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='max-w-[1340px] mx-auto mt-[100px]'>
      
       <div className='flex justify-between justify-center'>
       <h1 className='text-[32px] font-[700]'> <span className='text-[#FF1F3D] '>PH</span> Tube</h1>
       <div className='h-[40px] w-[100px] bg-[#25252533] rounded-[5px] flex justify-center items-center '><h1 className='' >Sort By view</h1></div>
       <button className="btn btn-error">Blog</button>
       
       </div>
       <div className='mt-[50px]'><hr /></div>

      

    </header>
      
    </>
  )
}

export default App
