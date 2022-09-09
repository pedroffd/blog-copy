// const newUsers = users.filter(user => user !== 2);

/* import { CardPost } from '@/types/CardPost'; */
import React from 'react';

import { GetServerSideProps } from 'next';
/* import Image from 'next/image';
import Link from 'next/link'; */

import prisma from '@/../lib/prisma';
// import { Avatar } from '@/components/avatar/Avatar';
import { PostProps } from '@/types/PostProps';

export const getServerSideProps: GetServerSideProps = async () => {
  const post = await prisma.post.findFirst({
    where: {
      published: true,
    },
    /* include: {
      author: {
        select: { name: true, email: true, image: true },
      },
    }, */
  });

  return {
    props: JSON.parse(JSON.stringify(post)),
  };
};

// eslint-disable-next-line import/no-mutable-exports
const HighlightedPost: React.FC<PostProps> = (props) => {
  console.log('HIGHLIGHT: ', props);
  /*  const authorAvatar = props.post?.author?.image;
  const { title, content, imgSrc, postUrl } = props; */
  return (
    <div className="flex flex-row max-w-screen-lg mx-auto px-6">
      test
      {/* <Link href={postUrl} aria-label={`Link to ${title}`}>
        <a>
          {' '}
          <Image
            alt={title}
            src={imgSrc}
            className="rounded-[18px] object-cover object-center"
            width={1080}
            height={950}
          />
        </a>
      </Link>
      <div className="pt-4 pl-9 pr-6">
        <p className="pb-3 text-md  text-blue-300">Technology</p>
        <h2 className="mb-3 text-4xl font-semibold leading-10 tracking-normal">
          <Link href={postUrl} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-4 max-w-none text-gray-600 pt-8">
          {content.substring(content, 172)}...
        </p>
        <div className="pt-2 bottom-0">
          <Avatar
            authorAvatar={authorAvatar}
            authorName="Julius Verne"
            date="Jul 21, 2021"
            lPadding="0"
            size={45}
          />
        </div>
      </div> */}
    </div>
  );
};

export { HighlightedPost };
