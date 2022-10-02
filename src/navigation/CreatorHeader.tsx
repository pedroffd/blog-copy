import React from 'react';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from '@/templates/Logo';

const CreatorHeader: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive('/')}>
          Feed
        </a>
      </Link>
    </div>
  );

  let right = null;

  let middle = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive('/')}>
            Feed
          </a>
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/login">
          <a data-active={isActive('/login')}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="flex">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
    );
    middle = (
      <div className="middle flex">
        <Link href="/drafts">
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className="right flex flex-row">
        <p className="px-6">{session.user?.name}</p>
        <button onClick={() => signOut()}>
          <a>Sign out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className="flex justify-between items-center p-4">
      {left}
      {middle}
      {right}
    </nav>
  );
};

export { CreatorHeader };
