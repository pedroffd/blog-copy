import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import prisma from '@/../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title, content, category, imgSrc } = req.body;

    const session = await getSession({ req });
    try {
      const email = session?.user?.email || 'pedro.alcarin@gmail.com';
      const result = await prisma.post.create({
        data: {
          title,
          content,
          category,
          imgSrc,
          author: { connect: { email } },
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).send({ message: 'error' });
    }
  }
  if (req.method === 'GET') {
    try {
      const post = await prisma.post.findFirst({
        where: {
          published: true,
        },
        include: {
          author: {
            select: { name: true, email: true, image: true },
          },
        },
      });
      res.status(200).json(post);
    } catch {
      res.status(400).send({ message: 'error' });
    }
  }
}
