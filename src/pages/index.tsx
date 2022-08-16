import { useSession } from 'next-auth/react';

import { Base } from '../templates/Base';

const Index = () => {
  const { data: session } = useSession();

  return <Base sessionData={session} />;
};

export default Index;
