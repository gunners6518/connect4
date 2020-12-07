import React, { useState, useCallback } from "react";
import "./Game.css";
import { GameBoard } from './GameBoard'


//ゲーム状態の定義
const GameState = {
  Opening: 'Player1がセルを選択して、ゲームを始めてください',
  Draw: '引き分け',
  PlayerOneWin: 'Player1の勝利！',
  PlayerTwoWin: 'Player2の勝利'
} as const;

type GameState = typeof GameState[keyof typeof GameState];

export const Game = () => {

  //Gameの状態のStateを定義
  const [gameStatus, setGameStatus] = useState<GameState>(GameState.Opening);
  console.log(gameStatus)

  //Gameの状態を取ってくるcallBack関数を設置
  const changeGameStatus = useCallback((state) => {
    setGameStatus(state)
  }, [])


  return (
    <div className="App">
      <div className="text">
        {gameStatus}
      </div>
      <GameBoard changeGameStatus={changeGameStatus}/>
    </div>
  );
}

export default Game;
