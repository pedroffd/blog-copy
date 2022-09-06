import React from 'react';

import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';

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
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let { title } = props;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Section>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || 'Unknown author'}</p>
        <div>{props.content} </div>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(props.id)}>Publish</button>
        )}
        {userHasValidSession && postBelongsToUser && (
          <button onClick={() => deletePost(props.id)}>Delete</button>
        )}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Section>
  );
};

export default Post;
