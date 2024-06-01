/**
 * TS TYPES FOR FILES
 */

/// App
export type PlayerType = 'X' | 'O';

export type PlayerObjectType = {
  X: string;
  Y: string;
};

export type GameBoardType = string[][];

export type GameStateType = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerTypes;
};

/// Component props
export type GameBoardProps = {
  onSelectCell: (rowIndex: number, colIndex: number) => void;
  board: GameBoardType;
};

export type GameOverProps = {
  winner: null | string;
  onRestart: () => void;
};

export type LogProps = {
  turns: GameState[];
};

export type PlayerProps = {
  initialName: string;
  symbol: PlayerType;
  isActive: boolean;
  onSave: (symbol: PlayerType, newName: string) => void;
};
