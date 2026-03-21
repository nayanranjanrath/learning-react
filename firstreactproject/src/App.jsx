import React, { useState } from 'react'   // 👈 ADD THIS LIN

function App() {
let [colour,setcolour] =useState("red")
  return (
<div className='w-full h-screen 'style={{backgroundColor:colour}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>test 


</div>




</div>



  )
}

export default App