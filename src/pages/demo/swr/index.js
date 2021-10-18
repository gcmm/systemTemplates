import React from 'react';
import { useSWR } from 'troyfe';

export default function Profile() {
  const fetcher = url =>
    fetch(url, { method: 'POST', body: '{}' }).then(res => res.json());
  const { data, error } = useSWR('/api/login', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.msg}!</div>;
}
