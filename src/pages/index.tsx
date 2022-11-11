import { GetServerSideProps } from 'next';

import prisma from '@/../lib/prisma';

import { Base } from '../templates/Base';

export const getServerSideProps: GetServerSideProps = async () => {
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

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
};
const Index = (props: any) => {
  return (
    <div className="bg-mainPurple-200 py-8 w-full">
      <Base props={props.post} />
    </div>
  );
};

export default Index;
