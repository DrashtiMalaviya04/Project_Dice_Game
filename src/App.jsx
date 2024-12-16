import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStated,setIsGameStated] = useState (false);

  const toggleGamePlay = () =>{
    setIsGameStated ((prev) => !prev);
  };
  return (
    <>
      { isGameStated ? <GamePlay /> : <StartGame  toggle={toggleGamePlay}/>}
      {/* <StartGame /> */}
    </>
  );
}

export default App;
