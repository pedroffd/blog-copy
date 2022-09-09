import React from 'react';

import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

import prisma from '@/../lib/prisma';
import { Section } from '@/layout/Section';
import { PostProps } from '@/types/PostProps';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  });
  await Router.push('/');
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/');
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session?.user?.name);
  const postBelongsToUser = session?.user?.email === props.post?.author?.email;
  let { title } = props.post;
  if (!props.published) {
    title = `${title} (Draft)`;
  }
  return (
    <Section>
      <div>
        <h2>{title}</h2>
        <p>By {props?.post.author?.name || 'Unknown author'}</p>
        <div>{props.content} </div>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.post.id)}>Publish</button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(props.post.id)}>Delete</button>
        )}
      </div>
    </Section>
  );
};

export default Post;
