import React, { useEffect, useState } from 'react';
import { TfiYoutube } from 'react-icons/tfi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();

  const navigate = useNavigate();

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex items-center p-4 border-b border-zinc-500 mb-4'>
      <Link to={'/'}>
        <TfiYoutube className='text-5xl text-main' />
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          type='text'
          placeholder='검색'
          autoFocus
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=' w-7/12 p-1 outline-none bg-black text-xl'
        />
        <button className='bg-black p-3 text-xl '>
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}
