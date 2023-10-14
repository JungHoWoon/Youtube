import React from 'react';
import { useParams } from 'react-router';

export default function Videos() {
  const { keyword } = useParams();
  return <div>{keyword ? `${keyword}` : 'popular'}</div>;
}
