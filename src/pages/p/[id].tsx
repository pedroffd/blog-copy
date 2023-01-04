import React from 'react';

import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import Image from 'next/image';
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
  console.log('props: ', props);
  return (
    <Section divId="Post">
      <div>
        <h2 className="mb-3 text-4xl font-bold leading-8 tracking-tight">
          {`${title} (Draft)`}
        </h2>
        <div>{content.substring(content, 93)}...</div>
        <p className="text-sm">
          By {props?.post.author?.name || 'Unknown author'}{' '}
          <span className="ml-12">{createdAt}</span>
        </p>
        <div>
          <Image
            alt={title}
            src={imgSrc}
            className="rounded-[18px] object-cover object-center"
            width={1080}
            height={950}
          />
        </div>
        <div className="pt-8">
          {!props.published && userHasValidSession && postBelongsToUser && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => publishPost(props.post.id)}
            >
              Publish
            </button>
          )}
          {userHasValidSession && postBelongsToUser && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded-full"
              onClick={() => deletePost(props.post.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Post;
