import Image from 'next/image';
import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../buttons/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import BeLogo from '../images/logos/behance.svg';
import { Section } from '../layout/Section';
import { NavbarThreeColumns } from '../navigation/NavbarThreeColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Landing page\n'}
            <span className="text-primary-500">Troca Online</span>
          </>
        }
        description="Descrição do projeto."
        button={
          <Link href="https://github.com/pedroffd/troca-online">
            <a>
              <Button xl>Veja os items mais procurados</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
