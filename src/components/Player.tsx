import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PlayerProps } from '../types/types';

import { Pencil, Save } from 'lucide-react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onSave,
}: PlayerProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    onSave(symbol, name);
  }

  function handleInputChange(e: any) {
    const value = e.target.value;
    if (value.length > 0) setName(() => value);
  }

  return (
    <li
      className={twMerge(
        'flex items-center gap-2 border p-2',
        isActive ? 'rounded border-slate-400' : 'border-transparent',
      )}
    >
      <span className='flex items-center gap-2'>
        {isEditing ? (
          <input
            required
            type='text'
            placeholder='Enter your new name'
            className='w-44 rounded-sm border border-slate-400 bg-slate-700 px-1 focus:outline focus:outline-1 focus:outline-yellow-300'
            defaultValue={name}
            onChange={handleInputChange}
          />
        ) : (
          <span
            className='w-44 overflow-hidden text-ellipsis whitespace-nowrap'
            title={`${name} -> ${symbol} player`}
          >
            {name}
          </span>
        )}

        <span className='font-rubik_mono box-border flex size-7 items-center justify-center rounded border border-slate-400 p-1'>
          {symbol}
        </span>
      </span>
      <button
        className='flex size-7 cursor-pointer items-center justify-center rounded border border-slate-400 text-yellow-300 underline transition hover:bg-slate-400/15 hover:text-yellow-400'
        title={isEditing ? 'Save' : 'Edit'}
        onClick={handleEditClick}
      >
        {isEditing ? <Save size={16} /> : <Pencil size={16} />}
      </button>
    </li>
  );
}
