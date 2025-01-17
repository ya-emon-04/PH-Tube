import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header className='max-w-[1340px] mx-auto mt-[100px]'>
      
       <div className='flex justify-between justify-center'>
       <h1 className='text-[40px] font-[700]'> <span className='text-[#FF1F3D] '>PH</span> Tube</h1>
       <div className='h-[40px] w-[100px] bg-[#25252533] rounded-[5px] flex justify-center items-center '><h1 className='' >Sort By view</h1></div>
       <button className="btn btn-error">Blog</button>
       
       </div>
       <div className='mt-[50px]'><hr /></div>

       <div className=' flex  justify-center mt-[100px]  '>
        <ul className=' flex  text-[38px] font-[600] gap-[30px] '>

          <li> <a href="/"> <button className="btn btn-outline btn-accent">All</button></a></li>
          <li> <a href="/music"> <button className="btn btn-outline btn-accent">Music</button></a></li>
          <li> <a href="/comedy"> <button className="btn btn-outline btn-accent">Comedy</button></a></li>
          <li> <a href="/drawing"> <button className="btn btn-outline btn-accent">Drawings</button></a></li>
          
         
        </ul>
       </div>
       <div className='flex justify-center mt-[50px] '><Outlet ></Outlet></div>

      </header>
      <main className='max-w-[1340px] mx-auto mt-[100px] ' >
        <div className='grid grid-cols-3 mx-[30px]'>
             {/* card 1 */}
           <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>

           </div>

           <div>
            {/* card 2 */}
            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
           </div>
           {/* card 3  */}
           <div>
           <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>

           </div>
           {/* card 4 */}
           <div>
           <div className="card bg-base-100 w-96 shadow-xl mt-[30px]">
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
           </div>


        </div>
        

      </main>
      
    
    
      
    </>
  )
}

export default App
