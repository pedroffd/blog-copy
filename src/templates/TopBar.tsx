import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import BeLogo from '../images/logos/behance.svg';
import { Section } from '../layout/Section';
import { NavbarThreeColumns } from '../navigation/NavbarThreeColumns';
import { Logo } from './Logo';

function logout() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  signOut();
}
const TopBar = () => {
  const { data: session } = useSession();
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
        {session && (
          <li>
            <button onClick={() => logout()}>
              {' '}
              <a>Sign Out</a>
            </button>
          </li>
        )}
        {!session && (
          <li>
            <Link href="/login">
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </NavbarThreeColumns>
    </Section>
  );
};

export { TopBar };
