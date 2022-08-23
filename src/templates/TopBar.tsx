import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import useRequireAuth from '@/../lib/useRequireAuth';

import BeLogo from '../images/logos/behance.svg';
import { Section } from '../layout/Section';
import { NavbarThreeColumns } from '../navigation/NavbarThreeColumns';
import { Logo } from './Logo';

function renderSignButton(session: Session | null) {
  return session?.user?.name ? (
    <li>
      <button onClick={() => signOut()}>
        {' '}
        <a>Sign Out</a>
      </button>
    </li>
  ) : (
    <li>
      <Link href="/login">
        <a>Sign In</a>
      </Link>
    </li>
  );
}
const TopBar = () => {
  const session = useRequireAuth();
  return (
    <Section yPadding="py-6" divId="TopBar">
      <NavbarThreeColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/pedroffd/troca-online">
            <a>
              <Image src={BeLogo} alt="Behance Logo" height={32} width={32} />
            </a>
          </Link>
        </li>
        {renderSignButton(session)}
      </NavbarThreeColumns>
    </Section>
  );
};

export { TopBar };
