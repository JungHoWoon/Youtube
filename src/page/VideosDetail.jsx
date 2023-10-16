import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';

export default function VideosDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='600'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={video.snippet.title}
        />
        <div>
          <p>{title}</p>
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
    </section>
  );
}
