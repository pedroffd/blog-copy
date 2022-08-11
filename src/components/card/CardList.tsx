import cardData from '@/data/cardData';
// eslint-disable-next-line import/no-named-as-default
import { Section } from '@/layout/Section';

import CardComponent from './CardComponent';

const CardList = () => {
  return (
    <Section>
      <div className="-m-4 flex flex-wrap justify-center">
        {cardData.map((cd) => (
          <CardComponent
            key={cd.title}
            title={cd.title}
            category="NFT"
            description={cd.description}
            imgSrc={cd.imgSrc}
            href={cd.href}
            authorAvatar={cd.authorAvatar}
          />
        ))}
      </div>
    </Section>
  );
};

export default CardList;
