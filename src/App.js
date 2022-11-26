import {GlobalStyles, DarkGlobalStyles} from './Styles/GlobalStyles.js';
import Home from './components/Home/Home.jsx';
import Presentation from './components/Presentation/Presentation.jsx'
import { useState } from 'react';
import CopoChaseMusic from "./songs/copoChase.mp3"

function App() {

 let valueDarkMode = localStorage.getItem("darkMode")
 valueDarkMode = JSON.parse(valueDarkMode)

 let songStatus = localStorage.getItem("songMode")
 songStatus = JSON.parse(songStatus)

 if(songStatus === null){
    localStorage.setItem("songMode", JSON.stringify(false))
    songStatus = false
 }


 if(valueDarkMode === null){
    localStorage.setItem("darkMode", JSON.stringify(false))
    valueDarkMode = false
 }

  let [mode, setMode] = useState(valueDarkMode)
  let [song, setSong] = useState(songStatus)

  const changeMode = ()=>{
    if(mode === true){
      setMode(false)
      localStorage.setItem("darkMode", JSON.stringify(false))
    }else if(mode === false){
      setMode(true) 
      localStorage.setItem("darkMode", JSON.stringify(true))
    }
    
  }

  const changeModeSong = ()=>{
    if(song === true){
      setSong(false)
      localStorage.setItem("songMode", JSON.stringify(false))
    }else if(song === false){
      setSong(true) 
      localStorage.setItem("songMode", JSON.stringify(true))
    }
  }

  const [page, setPage] = useState(false)
  const [transition, setTransition] = useState("pageTransitionUp")

    const changePage = ()=>{
       if(page === false){
          setTransition("pageTransitionDown")
          setTimeout(() => {
            setTransition("pageTransitionUp")
            setPage(true)
            clearTimeout(changePage)
          }, 1000);
       }else if(page === true){
          setTimeout(() => {
            setPage(false)
            clearTimeout(changePage)
          }, 1000);
       }
    }

  return (
    <>
      {!!song ?(<audio loop autoPlay={true} src={CopoChaseMusic}></audio>):("")}
      {!!mode ?(<DarkGlobalStyles/>):(<GlobalStyles/>)}
      {!page?( <Home eventDarkMode={changeMode} statusDarkMode={!!mode ?("on"):("off")} 
      eventModeSong={changeModeSong} statusSong={!!song ?("on"):("off")}
      eventChangePage={changePage} classTransition={transition}/>):(<Presentation eventChangePage={changePage} classTransition={transition}/>)}
    </>
  )
}

export default App;
