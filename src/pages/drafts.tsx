import React from 'react';

import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';

import prisma from '@/../lib/prisma';
import Post from '@/components/basicpost/Post';
import { Section } from '@/layout/Section';
import { CreatorHeader } from '@/navigation/CreatorHeader';
import { PostProps } from '@/types/PostProps';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user?.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: {
      drafts: JSON.parse(JSON.stringify(drafts)),
    },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Section yPadding="py-4" divId="draftsheader">
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Section>
    );
  }
  console.log('DRAFTS: ', props.drafts[0]?.author);

  return (
    <Section yPadding="py-4" divId="drafts">
      <CreatorHeader />
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Section>
  );
};

export default Drafts;
