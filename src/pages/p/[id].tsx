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
        select: { name: true, email: true, image: true },
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

  const { author, category, createdAt, imgSrc, title, content } = props.post;
  const userHasValidSession = Boolean(session?.user?.name);
  const postBelongsToUser = session?.user?.email === props.post?.author?.email;
  console.log('POST: ', props.post);

  return (
    <Section divId="Post">
      <div>
        <h2 className="mb-3 text-4xl font-bold leading-8 tracking-tight">
          {`${title} (Draft)`}
        </h2>
        <div>{content.substring(content, 93)}...</div>
        <p className="text-sm">
          By {props?.post.author?.name || 'Unknown author'}
        </p>

        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.post.id)}>Publish</button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button className="ml-3" onClick={() => deletePost(props.post.id)}>
            Delete
          </button>
        )}
      </div>
    </Section>
  );
};

export default Post;
