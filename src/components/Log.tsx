import { motion } from 'framer-motion';

import { LogProps } from '../types/types';

export default function Log({ turns }: LogProps) {
  return (
    <div className='mt-5 flex h-[250px] flex-col items-center'>
      <h2 className='font-syne text-center text-2xl font-bold'>LOGS</h2>
      <ol className='font-mono'>
        {turns.map((turn) => (
          <motion.li
            key={`${turn.square.row}${turn.square.col}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.2,
            }}
          >
            {turn.player} selected {turn.square.row},{turn.square.col}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
