import Link from 'next/link';

import { Button } from '../buttons/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Cadastre-se agora."
      button={
        <Link href="https://github.com/pedroffd/troca-online">
          <a>
            <Button>Cadastre-se</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
