import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideosDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col items-center'>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='1024'
          height='700'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className='p-6'>
          <p className='text-xl font-bold mb-5'>{title}</p>
          <ChannelInfo id={channelId} title={channelTitle} className='mb-5' />
          <pre className=' whitespace-pre-wrap p-2 rounded-2xl bg-zinc-800'>
            {description}
          </pre>
        </div>
      </article>
    </section>
  );
}
