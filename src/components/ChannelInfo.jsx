import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();

  const { error, data: url } = useQuery(['channel', id], () =>
    youtube.channelImageUrl(id)
  );

  return (
    <div>
      {error && <p>채널 이미지 에러 발생!</p>}
      {url && <img src={url} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
