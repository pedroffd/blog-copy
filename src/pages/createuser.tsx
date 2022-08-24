/* import { useState } from 'react';

import { Prisma } from '@prisma/client';
import Head from 'next/head';
import { Container, Form, Header } from 'semantic-ui-react';

import prisma from '@/../lib/prisma';
import { fetcher } from '@/utils/fetcher';

export async function getServerSideProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany();
  return {
    props: { initialUsers: users },
  };
}

const options = [
  { key: 'd', text: 'DEVELOPER', value: 'DEVELOPER' },
  { key: 'u', text: 'USER', value: 'USER' },
  { key: 'a', text: 'ADMIN', value: 'ADMIN' },
];

export default function CreateUser({ initialUsers }) {
  const [users, setUsers] =
    useState<Prisma.UserUncheckedCreateInput[]>(initialUsers);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [role, setRole] = useState();

  const handleChange = (e, { value }) => setRole(value);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
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
            await setUsers([...users, body]);
            setName('');
            setUsername('');
            setEmail('');
            setAvatar('');
            setRole(null);
          }}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Form.Input
              fluid
              label="Username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              label="Avatar"
              placeholder="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Form.Select
              fluid
              label="Role"
              placeholder="Role"
              options={options}
              value={role}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    </>
  );
}
 */
