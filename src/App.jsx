import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from "axios";



function App() {
  
  const [joke,setJoke]=useState("");

  function handleClick(){
  Axios.get("https://v2.jokeapi.dev/joke/Any").then((response)=>{
    setJoke(response.data.joke)
  })};

  return (
  <div className="container">
    <p>{joke}</p>
    <button onClick={handleClick}>Generate Joke</button>
   </div>
  )
}

export default App;
