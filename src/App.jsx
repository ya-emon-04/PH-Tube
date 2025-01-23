import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

import './App.css'

function App() {
  

  return (
    <>
    <header className='max-w-[1340px] mx-auto mt-[100px]'>
      
       <div className='flex justify-between justify-center'>


       <div className='flex items-center'>
        <div>
          <img src ="/public/fi_3039386.png" className='mr-[15px]'></img>
        </div>
       <div>
      
      <h1 className='text-[40px] font-[700]'> <span className='text-[#FF1F3D] '> PH</span>Tube </h1>
       </div>
        
        </div>


       <div className='h-[40px] w-[100px] bg-red-500 rounded-[5px] flex justify-center items-center '><h1 className='' >Sort By view</h1></div>
       <button className="btn btn-error">Blog</button>
       
       </div>
       <div className='mt-[20px]'><hr /></div>

       <div className=' flex  justify-center mt-[50px]  '>
        <ul className=' flex  text-[38px] font-[600] gap-[30px] '>

          <li> 
          <Link to ="/"><button className="btn btn-outline btn-accent">All</button> </Link>

            {/* <a href="/"> <button className="btn btn-outline btn-accent">All</button></a>*/}
            </li> 
          <li> 
            {/* <a href="/music"> <button className="btn btn-outline btn-accent">Music</button></a> */}
          <Link to="/music"><button className="btn btn-outline btn-accent">Music</button> </Link>
          </li>
          <li> 
          <Link to="/comedy"><button className="btn btn-outline btn-accent">Comedy</button> </Link>
            {/* <a href="/comedy"> <button className="btn btn-outline btn-accent">Comedy</button></a> */}
            </li>
          <li>
          <Link to="/drawing"><button className="btn btn-outline btn-accent">Drawings</button> </Link> 
            {/* <a href="/drawing"> <button className="btn btn-outline btn-accent">Drawings</button></a> */}
            </li>
          
         
        </ul>
       </div>
       <div className='flex justify-center mt-[50px] '><Outlet ></Outlet></div>

      </header>
      
     
   
    
      
    </>
  )
}

export default App
