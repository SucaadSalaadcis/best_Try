import React, { useState } from 'react'

function App() {
  const [fur, setfur] = useState(true);
  const [iftax, setiftax] = useState(true);
  const [xir, setXir] = useState(true);
  return (
    <div className='bg-rose-600 w-[240px] text-white leading-10 h-screen'>

    <div>

     <div className='pt-3 '>

      <p className='hover:bg-teal-800 rounded-md ml-3 mr-3  pl-4'>Registration <span> <i onClick={() => setfur(false)} class={`fa-solid fa-chevron-down ml-44 absolute top-5  ${fur ? "block" : "hidden"} `}></i> </span>
        <span>  <i class={`fa-solid fa-chevron-up  ml-44 absolute top-5  ${fur ? "hidden" : "block"}  `}  onClick={() => setfur(true)} ></i> </span> </p>
     </div>

      <div className={`${fur ? "hidden" : "block"} ml-10  ` } >
        <p>Customer Registration</p>
        <p>Rate Info</p>
        <p>Employees</p>
        <p>Saacad Badalid</p>
      </div>
    </div>
    {/*  */}

    <div>

     <div className='pt-3 '>

      <p className='hover:bg-teal-800  h-10 rounded-md ml-3 mr-3  pl-4'>Registration <span> <i onClick={() => setiftax(false)} class={`fa-solid fa-chevron-down ml-44 text-sm  ${iftax ? "block" : "hidden"} relative bottom-7 `}></i> </span>
        <span> <i class={`fa-solid fa-chevron-up  ml-44 text-sm  ${iftax ? "hidden" : "block"} relative bottom-7`} onClick={() => setiftax(true)} ></i> </span> </p>
     </div>

      <div className={`${iftax ? "hidden" : "block"} ml-10 `}>
        <p>Customer Registration</p>
        <p>Rate Info</p>
        <p>Employees</p>
        <p>Saacad Badalid</p>
      </div>
    </div>
   



    </div>
  )
}

export default App
// <p className='hover:bg-teal-800  '>Close <span><i onClick={()=> setClose(false)} class="fa-solid fa-chevron-down ml-36 "></i></span></p>
