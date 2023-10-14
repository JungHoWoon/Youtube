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
    <header>
      <Link to={'/'}>
        <TfiYoutube />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='검색'
          autoFocus
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}
