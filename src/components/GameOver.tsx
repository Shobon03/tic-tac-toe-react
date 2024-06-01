import { GameOverProps } from '../types/types';

export default function GameOver({ winner, onRestart }: GameOverProps) {
  return (
    <div className='absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded bg-black/80'>
      <h2 className='font-syne text-5xl font-medium'>Game Over!</h2>

      <p className='font-rubik_mono my-5 text-xl'>
        {winner ? <>{winner} won!</> : 'Draw!'}
      </p>

      <button
        className='rounded bg-yellow-300 px-5 py-2 font-bold uppercase text-black shadow shadow-slate-100/10 transition hover:bg-yellow-400'
        onClick={onRestart}
      >
        Rematch!
      </button>
    </div>
  );
}
