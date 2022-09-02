/* // import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  // const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title,
      content,
      postUrl: 'testurl',
      category: 'test',
      image: 'test image',
    },
  });
  res.json(result);
} */