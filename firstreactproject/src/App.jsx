import React, { useState } from 'react'   // 👈 ADD THIS LIN

function App() {
let [colour,setcolour] =useState("red")
  return (
<div className='w-full h-screen 'style={{backgroundColor:colour}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex fixed flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-2xl'>
<button  onClick={()=>setcolour("red")}  className='flex rounded-2xl px-3 py-2 text-white outline-0 bg-red-500'>red</button>
<button onClick={()=>setcolour("white")}  className='flex rounded-2xl px-3 py-2 text-black outline-0 bg-white'>white</button>
<button onClick={()=>setcolour("green")} className='flex rounded-2xl px-3 py-2 text-white outline-0 bg-green-600'>green</button>
</div>

</div>




</div>



  )
}

export default App