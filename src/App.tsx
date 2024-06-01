import { useState } from 'react';

import {
  GameBoardType,
  GameStateType,
  PlayerObjectType,
  PlayerType,
} from './types/types';

import { WINNING_COMBINATIONS } from './constants/WINNING_COMBINATIONS';
import { INITIAL_BOARD } from './constants/INITIAL_BOARD';
import { PLAYERS } from './constants/PLAYERS';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import GameOver from './components/GameOver';

function deriveActivePlayer(gameTurns: GameStateType[]): PlayerType {
  let currentPlayer: PlayerType = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';

  return currentPlayer;
}

function deriveGameBoard(gameTurns: GameStateType[]) {
  let gameBoard = [...INITIAL_BOARD.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard: GameBoardType, players: PlayerObjectType) {
  let winner: null | string | PlayerType = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare: string | PlayerType =
        gameBoard[combination[0].row][combination[0].col],
      secondSquare: string | PlayerType =
        gameBoard[combination[1].row][combination[1].col],
      thirdSquare: string | PlayerType =
        gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquare !== '' &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare === 'X' ? players.X : players.Y;
    }
  }

  return winner;
}

export default function App() {
  const [players, setPlayers] = useState<PlayerObjectType>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameStateType[]>([]);

  const currentPlayer: PlayerType = deriveActivePlayer(gameTurns);

  const gameBoard: GameBoardType = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);
  const hasDraw: boolean = gameTurns.length === 9 && !winner;

  function handleSelectCell(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: GameStateType[]) => {
      let currentPlayer: PlayerType = deriveActivePlayer(prevTurns);

      const updatedTurns: GameStateType[] = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol: PlayerType, newName: string) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <section className='flex flex-col items-center'>
      <div>
        <h2 className='font-syne text-4xl font-black'>Tic-Tac-Toe</h2>

        <div className='relative mt-5 w-[700px] rounded border border-slate-700 bg-slate-900 p-5 shadow-md shadow-slate-100/10'>
          <ol className='flex justify-between px-10'>
            <Player
              initialName={PLAYERS.X}
              symbol='X'
              isActive={currentPlayer === 'X'}
              onSave={handlePlayerNameChange}
            />
            <Player
              initialName={PLAYERS.Y}
              symbol='O'
              isActive={currentPlayer === 'O'}
              onSave={handlePlayerNameChange}
            />
          </ol>

          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}

          <GameBoard onSelectCell={handleSelectCell} board={gameBoard} />
        </div>

        <Log turns={gameTurns} />
      </div>
    </section>
  );
}
