import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [allownumber, setallownumber] = useState(false)
  const [allowcharecter, setallowcharacter] = useState(false)
  const [password, setpassword] = useState(false)
const passwordgenerator =()=>{
let pass=" "
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(allownumber) str+="1234567890"
if(allowcharecter) str+="@#$%^&*!"
for (let i = 1; i < length; i++) {
  let char =Math.floor(Math.random()*str.length+1)
  pass =str.charAt(char)
}

}
  return (
    <>
      <div className=''>

      </div>
    </>
  )
}

export default App
