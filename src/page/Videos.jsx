import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import VideoCard from '../components/VideoCard';
import { search } from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => search(keyword));

  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러 발생!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
