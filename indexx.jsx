import React from 'react'

function indexx() {
  return (
    <div className='bg-rose-600 w-[240px] text-white leading-10 h-screen'>

    <div>

    <div>
     <p className='hover:bg-teal-800 '>Open <span><i onClick={()=> setOpen(false)} class={`fa-solid fa-chevron-down ml-48 absolute top-3 ${open ? "block" :  "hidden"} `}></i></span></p>
     <i class={`fa-solid fa-chevron-up ${close ? "hidden" : "block"}`} onClick={()=> setOpen(true)} ></i>

    </div>

<div className={`${changeIcon ? "block" : "hidden"}`}>
<p>suu</p>
<p>saa</p>
<p>suu</p>
<p>kk</p>
   </div>  
    </div>
<br/>
{/*  */}

<div className='mt-[100px]'>

<div>
<p className='hover:bg-teal-800 '>Open <span><i onClick={()=> setOpen(false)} class={`fa-solid fa-chevron-down ml-48 absolute top-3 ${open ? "block" :  "hidden"} `}></i></span></p>
<i class={`fa-solid fa-chevron-up ${close ? "hidden" : "block"}`} onClick={()=> setOpen(true)} ></i>

</div>

<div className={`${changeIcon ? "block" : "hidden"}`}>
<p>suu</p>
<p>saa</p>
<p>suu</p>
<p>kk</p>
</div>  
</div>

 </div> 
  )
}

export default indexx
//  <span className={`${hideIcon ? <i class=' hover:bg-teal-800 fa-solid fa-chevron-down ml-48 absolute top-3'></i>  :  <i class='fa-solid fa-chevron-up ml-48 absolute top-3' ></i>}`}  onClick={()=> setHideIcon(false)} >