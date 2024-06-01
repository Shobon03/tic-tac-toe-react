import { motion } from 'framer-motion';

import { GameBoardProps } from '../types/types';

export default function GameBoard({ onSelectCell, board }: GameBoardProps) {
  return (
    <ol className='mx-auto mt-10 flex flex-col items-center'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className='flex gap-3'>
            {row.map((playerSymbol, colIndex) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  ease: 'easeOut',
                  delay: 0.3,
                  duration: 0.07 * (rowIndex + colIndex),
                }}
                key={colIndex}
                className='mt-3'
              >
                <button
                  className='font-rubik_mono size-28 cursor-pointer rounded-md border border-slate-400 bg-slate-700 text-6xl text-white shadow-sm shadow-slate-100/10 transition hover:bg-slate-600/90'
                  onClick={() => {
                    onSelectCell(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== ''}
                >
                  {playerSymbol}
                </button>
              </motion.li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
