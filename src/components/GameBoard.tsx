import React, { useState, useCallback } from "react";


//プレイヤーの定義
const Player = {
  One: 1,
  Two: 2
} as const ;

type Player = typeof Player[keyof typeof Player];

type Board = {
  changeGameStatus: (state: any) => void;
};

export const GameBoard = ({changeGameStatus}:Board) => {
  const [player, setPlayer] = useState<Player>(1);



  // const getPrettyPlayer = (player: Player) => {
  //   if (player === Player.None) return "noPlayer";
  //   if (player === Player.One) return "playerOne";
  //   if (player === Player.Two) return "playerTwo";
  // };

  // const makeMove(column: number) {
  //   const { board, playerTurn } = this.state;

  //   const index = findLowestEmptyIndex(board, column);

  //   const newBoard = board.slice();
  //   newBoard[index] = playerTurn;

  //   const gameState = getGameState(newBoard);

  //   this.setState({
  //     board: newBoard,
  //     playerTurn: togglePlayerTurn(playerTurn),
  //     gameState
  //   });
  // }

  //indexで受け取ったコマの列で一番低い値を取得
  // const findLowestEmptyIndex = (board: Board, column: number) => {
  //   for (let i = 35 + column; i >= 0; i -= 7) {
  //     if (board[i] === Player.None) return i;
  //   }

  //   return -1;
  // };

  //プレイヤー切り替え
  const togglePlayerTurn = (nowPlayer: Player) => {
    const nextPlayer = nowPlayer === 1 ? 2 : 1;
    setPlayer(nextPlayer)
    console.log("次の人", player)
  };




  // const handleOnClick = (index: number) => () => {
  //   const { gameState } = this.state

  //   if (gameState !== GameState.Ongoing) return

  //   const column = index % 7;

  //   this.makeMove(column);
  // };

  //ゲームの状態(4つなら並んでいるかどうか)
  // const getGameState = (board: Board) => {
  //   //横チェック
  //   for (let r = 0; r < 6; r++) {
  //     for (let c = 0; c <= 4; c++) {
  //       const index = r * 7 + c;
  //       const boardSlice = board.slice(index, index + 4);

  //       const winningResult = checkWinningSlice(boardSlice);
  //       if (winningResult !== false) return winningResult;
  //     }
  //   }

  //縦チェック
  // for (let r = 0; r <= 2; r++) {
  //   for (let c = 0; c < 7; c++) {
  //     const index = r * 7 + c;
  //     const boardSlice = [
  //       board[index],
  //       board[index + 7],
  //       board[index + 7 * 2],
  //       board[index + 7 * 3]
  //     ];

  //     const winningResult = checkWinningSlice(boardSlice);
  //     if (winningResult !== false) return winningResult;
  //   }
  // }

  //斜めチェック
  //   for (let r = 0; r <= 2; r++) {
  //     for (let c = 0; c < 7; c++) {
  //       const index = r * 7 + c;

  //       // 右肩上がり
  //       if (c >= 3) {
  //         const boardSlice = [
  //           board[index],
  //           board[index + 7 - 1],
  //           board[index + 7 * 2 - 2],
  //           board[index + 7 * 3 - 3]
  //         ];

  //         const winningResult = checkWinningSlice(boardSlice);
  //         if (winningResult !== false) return winningResult;
  //       }

  //       // 左肩上がり
  //       if (c <= 3) {
  //         const boardSlice = [
  //           board[index],
  //           board[index + 7 + 1],
  //           board[index + 7 * 2 + 2],
  //           board[index + 7 * 3 + 3]
  //         ];

  //         const winningResult = checkWinningSlice(boardSlice);
  //         if (winningResult !== false) return winningResult;
  //       }
  //     }
  //   }

  //   if (board.some(cell => cell === Player.None)) {
  //     return GameState.Ongoing
  //   } else {
  //     return GameState.Draw
  //   }
  // };

  // const checkWinningSlice = (miniBoard: Player[]) => {
  //   if (miniBoard.some(cell => cell === Player.None)) return false;

  //   if (
  //     miniBoard[0] === miniBoard[1] &&
  //     miniBoard[1] === miniBoard[2] &&
  //     miniBoard[2] === miniBoard[3]
  //   ) {
  //     return miniBoard[1];
  //   }

  //   return false;
  // };

  type Props = {
    onClick: (event: any) => void
  }


  return (
    <div
      className="cell"
      onClick={togglePlayerTurn(player)}
    // data-player={getPrettyPlayer(player)}
    />
  );
}