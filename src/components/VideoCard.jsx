import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/registrationDate';

export default function VideoCard({ video }) {
  const { title, thumbnails, publishedAt, channelTitle } = video.snippet;

  const navigate = useNavigate();

  return (
    <li
      className='p-2'
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img src={thumbnails.medium.url} alt={title} className='w-full' />
      <div>
        <p className=' font-semibold my-1 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
