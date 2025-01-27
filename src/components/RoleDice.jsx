import styled from "styled-components";

const RoleDice = ({roleDice,currentDice}) => {
  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./icon${currentDice}.png`} alt="icon1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;

  p {
    font-size: 20px;
  }

  .dice {
    cursor: pointer;
  }
`;
