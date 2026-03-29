import { useCallback, useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [allownumber, setallownumber] = useState(false)
  const [allowcharecter, setallowcharacter] = useState(false)
  const [password, setpassword] = useState(false)
const passwordgenerator =useCallback(()=>{
let pass=" "
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(allownumber) str+="1234567890"
if(allowcharecter) str+="@#$%^&*!"
for (let i = 1; i < length; i++) {
  let char =Math.floor(Math.random()*str.length+1)
  pass +=str.charAt(char)
  setpassword(pass)
}},[length,allownumber,allowcharecter,setpassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-3xl px-4 py-4 my-3.5 bg-gray-700 text-orange-600'>
  <h1 className='text-amber-50 text-center'>password generator</h1>

  <div className='rounded-2xl overflow-hidden mb-4'>
    <input
  type="text"
  value={password}
  className="w-full px-3 py-2 rounded-md bg-white text-black"
  placeholder="password"
  readOnly
/>
    <button className='bg-blue-600 text-white outline-0 px-3 py-0.5 shrink-0'>copy</button>
  </div>
</div>
    </>
  )
}

export default App
