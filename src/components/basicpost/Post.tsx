import React from 'react';

import Router from 'next/router';

import { PostProps } from '@/types/PostProps';

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : 'Unknown author';
  return (
    <div onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
      <h1 className="text-xl">{post.title}</h1>
      <small>By {authorName}</small>
      <p>{post.content}</p>
      <hr className="border-2 mt-2" />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
