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
  const { title, content, postUrl, category, image } = req.body;

  const session = await getSession({ req });
  const email = session?.user?.email || 'pedro.alcarin@gmail.com';
  const result = await prisma.post.create({
    data: {
      title,
      content,
      postUrl,
      category,
      image,
      author: { connect: { email } },
    },
  });
  res.json(result);
}
