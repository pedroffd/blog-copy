import { Prisma } from '@prisma/client';
import { Container, Form, Header } from 'semantic-ui-react';

import { fetcher } from '@/utils/fetcher';

export default function CreateUser() {
  return (
    <Container style={{ margin: 20 }}>
      <Header as="h3">App next js auth create user page</Header>
      <Form
        onSubmit={async () => {
          const body: Prisma.UserCreateInput = {
            name,
            username,
            role,
            email,
            avatar,
          };
          await fetcher('/api/create', { user: body });
        }}
      ></Form>
    </Container>
  );
}
