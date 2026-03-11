





function App() {
  let number = 0
const addvalue=() => {
  number=number+1
  console.log("value added ",number)
}
const removevalue=()=>{
  if(number==0){
   return }
  else{number=number-1
    console.log("value decrised",number)
  }
}
  return (
   <>
   <h1>hello every one </h1>
   <h2>counter value {number}</h2>
   <button onClick={addvalue}>addvalue</button>
   <button onClick={removevalue}>remove value </button>
   </>
  )
}

export default App
