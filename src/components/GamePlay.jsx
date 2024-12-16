import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelecter from "./NumberSelecter";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState();
  const [showRules,setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice =() =>{
    if(! selectedNumber) {
      setError("You have not selected any Number");
      return
    }
    
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice ((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }
    else{
      setScore((prev) => prev - 2)
    }
    setSelectedNumber (undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_selection">
        <TotalScore 
        score={score}/>
        <NumberSelecter
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice
      currentDice={currentDice}
      roleDice={roleDice} />
      <div className="btns">
        <Button
        onClick={resetScore} className="reset">Reset</Button>
        <Button
        onClick={() => setShowRules((prev) =>!prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      { showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_selection{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.btns{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.reset{
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover{
     background-color: black;
     border: 1px solid transparent ;
     color: white;
     /* transition: 0.3s background-ease-in ; */
  }
}
`;
