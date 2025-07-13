import React, { useState } from 'react'
import VIDEO from './video.json'
import Container from './YOUTUBE/Container'
import Navbar from './YOUTUBE/Navbar'
import YoutubeLogo from './assets/YouTube-Logo.png';

const App = () => {

  let [state, setState] = useState(VIDEO);
  let [play, setPlay] = useState(state[0]);

  let handlePlay=(lio)=>{
      setPlay(lio);
  }

  return (
    <div>
      <Navbar>
      </Navbar>
      <Container state={state} play={play} run={handlePlay}></Container>
    </div>
  )
}

export default App
