import Image from 'next/image';
import Link from 'next/link';

import BeLogo from '../images/logos/behance.svg';
import { Section } from '../layout/Section';
import { NavbarThreeColumns } from '../navigation/NavbarThreeColumns';
import { Logo } from './Logo';

const TopBar = () => (
  <Section yPadding="py-6">
    <NavbarThreeColumns logo={<Logo xl />}>
      <li>
        <Link href="https://github.com/pedroffd/troca-online">
          <Image src={BeLogo} alt="Behance Logo" height={32} width={32} />
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Sign in</a>
        </Link>
      </li>
    </NavbarThreeColumns>
  </Section>
);

export { TopBar };
