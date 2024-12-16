import styled from "styled-components";
// import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./hero.jpeg" alt="hero" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  /* transition: 0.3s background-ease-in ; */

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    /* transition: 0.3s background-ease-in ; */
  }
`;
