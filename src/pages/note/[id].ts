import { NextApiRequest, NextApiResponse } from 'next';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import prisma from '@/../../lib/prisma';
import { Section } from '@/layout/Section';
import Post from '@/components/basicpost/Post';
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noteId = req.query.id;

  if (req.method === 'DELETE') {
    const note = await prisma.note.delete({
      where: { id: Number(noteId) },
    });
    res.json(note);
  } else {
    res.status(400).send({ message: 'error' });
  }
}
