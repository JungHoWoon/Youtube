import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();

  const { error, data: url } = useQuery(
    ['channel', id],
    () => youtube.channelImageUrl(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className='flex items-center my-3 '>
      {error && <p>채널 이미지 에러 발생!</p>}
      {url && <img src={url} alt={title} className='w-10 h-10 rounded-full' />}
      <p className='ml-3'>{title}</p>
    </div>
  );
}
